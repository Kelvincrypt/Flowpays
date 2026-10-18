import { useState } from 'react'
import { useAccount, useWriteContract, useWaitForTransactionReceipt, useReadContract, useSwitchChain } from 'wagmi'
import { usePrivy } from '@privy-io/react-auth'
import { erc20Abi, isAddress } from 'viem'
import { motion, AnimatePresence } from 'framer-motion'
import { SplitSquareHorizontal, Plus, Trash2, Loader2, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react'
import { toast } from 'sonner'
import { getUsdc, buildTxExplorerUrl } from '@/onchain-facts'
import { Amount, usdcDecimalsFor } from '@/onchain-money'
import { loadContacts } from './Contacts'

const TARGET_CHAIN_ID = 5042
const usdcFact = getUsdc(TARGET_CHAIN_ID)!

const glass = {
  card: {
    background: 'rgba(255,255,255,0.72)',
    backdropFilter: 'blur(24px) saturate(180%)',
    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
    border: '1px solid rgba(255,255,255,0.68)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(18,45,69,0.07), inset 0 1px 0 rgba(255,255,255,0.55)',
  } as React.CSSProperties,
  inner: {
    background: 'rgba(255,255,255,0.46)',
    border: '1px solid rgba(255,255,255,0.56)',
    borderRadius: '14px',
  } as React.CSSProperties,
}

interface Recipient {
  id: string
  address: string
  amount: string
  label: string
  addrError: string
}

function newRecipient(): Recipient {
  return { id: Math.random().toString(36).slice(2), address: '', amount: '', label: '', addrError: '' }
}

type SplitStep = 'idle' | 'approving' | 'sending' | 'done'

export default function SplitPayment() {
  const { authenticated, login } = usePrivy()
  const { address, isConnected, chainId } = useAccount()
  const { switchChain, isPending: isSwitching } = useSwitchChain()
  const wrongChain = isConnected && chainId !== TARGET_CHAIN_ID

  const [recipients, setRecipients] = useState<Recipient[]>([newRecipient(), newRecipient()])
  const [step, setStep] = useState<SplitStep>('idle')
  const [currentIdx, setCurrentIdx] = useState(0)
  const [txHashes, setTxHashes] = useState<string[]>([])
  const contacts = loadContacts()

  const { data: rawBalance } = useReadContract({
    address: usdcFact.address as `0x${string}`,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    chainId: TARGET_CHAIN_ID,
    query: { enabled: !!address },
  })
  const formattedBalance = rawBalance != null
    ? Amount.fromRaw(rawBalance, usdcDecimalsFor(TARGET_CHAIN_ID)).toFixed(2)
    : '0.00'

  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    address: usdcFact.address as `0x${string}`,
    abi: erc20Abi,
    functionName: 'allowance',
    args: address ? [address, address] : undefined,
    chainId: TARGET_CHAIN_ID,
    query: { enabled: !!address },
  })

  const { writeContract: approveTx, data: approveTxHash, isPending: isApproving, reset: resetApprove } = useWriteContract()
  const { isSuccess: approveSuccess } = useWaitForTransactionReceipt({ hash: approveTxHash })
  const { writeContract: transferTx, data: transferTxHash, isPending: isSending, error: writeError, reset: resetTransfer } = useWriteContract()
  const { isSuccess: transferSuccess } = useWaitForTransactionReceipt({ hash: transferTxHash })

  const totalAmount = recipients.reduce((sum, r) => sum + (Number(r.amount) || 0), 0)

  const updateRecipient = (id: string, patch: Partial<Recipient>) => {
    setRecipients(rs => rs.map(r => r.id === id ? { ...r, ...patch } : r))
  }

  const addRecipient = () => setRecipients(rs => [...rs, newRecipient()])
  const removeRecipient = (id: string) => setRecipients(rs => rs.filter(r => r.id !== id))

  const validate = () => {
    let ok = true
    setRecipients(rs => rs.map(r => {
      const err = !isAddress(r.address) ? 'Invalid address' : ''
      if (err) ok = false
      return { ...r, addrError: err }
    }))
    return ok
  }

  // After approve: send to first recipient
  if (approveSuccess && step === 'approving') {
    setStep('sending')
    resetApprove()
    void refetchAllowance()
    const r = recipients[0]
    const raw = BigInt(Math.round(Number(r.amount) * 1e6))
    transferTx({
      address: usdcFact.address as `0x${string}`,
      abi: erc20Abi,
      functionName: 'transfer',
      args: [r.address as `0x${string}`, raw],
      chainId: TARGET_CHAIN_ID,
    })
  }

  // After each transfer: move to next or finish
  if (transferSuccess && step === 'sending') {
    const hash = transferTxHash ?? ''
    const nextIdx = currentIdx + 1
    setTxHashes(prev => [...prev, hash])
    resetTransfer()
    if (nextIdx < recipients.length) {
      setCurrentIdx(nextIdx)
      const r = recipients[nextIdx]
      const raw = BigInt(Math.round(Number(r.amount) * 1e6))
      transferTx({
        address: usdcFact.address as `0x${string}`,
        abi: erc20Abi,
        functionName: 'transfer',
        args: [r.address as `0x${string}`, raw],
        chainId: TARGET_CHAIN_ID,
      })
    } else {
      setStep('done')
    }
  }

  const handleSend = () => {
    if (wrongChain) { switchChain({ chainId: TARGET_CHAIN_ID }); return }
    if (!validate()) { toast.error('Fix address errors first'); return }
    if (totalAmount <= 0) { toast.error('Add amounts for all recipients'); return }

    const totalRaw = BigInt(Math.round(totalAmount * 1e6))
    const currentAllowance = allowance ?? 0n
    setCurrentIdx(0)
    setTxHashes([])

    if (currentAllowance >= totalRaw) {
      setStep('sending')
      const r = recipients[0]
      const raw = BigInt(Math.round(Number(r.amount) * 1e6))
      transferTx({
        address: usdcFact.address as `0x${string}`,
        abi: erc20Abi,
        functionName: 'transfer',
        args: [r.address as `0x${string}`, raw],
        chainId: TARGET_CHAIN_ID,
      })
    } else {
      setStep('approving')
      const MAX = BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
      approveTx({
        address: usdcFact.address as `0x${string}`,
        abi: erc20Abi,
        functionName: 'approve',
        args: [address as `0x${string}`, MAX],
        chainId: TARGET_CHAIN_ID,
      })
    }
  }

  const reset = () => {
    setStep('idle'); setCurrentIdx(0); setTxHashes([])
    setRecipients([newRecipient(), newRecipient()])
    resetTransfer(); resetApprove()
  }

  const isBusy = step === 'approving' || step === 'sending' || isApproving || isSending

  return (
    <div className="space-y-4">
      {/* Header */}
      <section style={glass.card} className="p-5">
        <div className="flex items-center gap-2 mb-1">
          <SplitSquareHorizontal className="size-5" style={{ color: 'var(--accent)' }} />
          <span className="display text-lg font-bold" style={{ color: 'var(--ink)' }}>Split Payment</span>
        </div>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>Divide a USDC payment across multiple recipients in one flow.</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>Balance:</span>
          <span className="display text-sm font-bold tabular-nums" style={{ color: 'var(--ink)' }}>{formattedBalance} USDC</span>
        </div>
      </section>

      {/* Recipients */}
      <section style={glass.card} className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>Recipients ({recipients.length})</p>
          <span className="display text-sm font-bold tabular-nums" style={{ color: 'var(--accent)' }}>
            Total: ${totalAmount.toFixed(2)} USDC
          </span>
        </div>

        <AnimatePresence>
          {recipients.map((r, i) => (
            <motion.div key={r.id} layout initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, height: 0 }}>
              <div style={glass.inner} className="p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>Recipient {i + 1}</span>
                  {recipients.length > 2 && (
                    <button onClick={() => removeRecipient(r.id)} className="flex size-6 items-center justify-center rounded-lg hover:bg-red-50">
                      <Trash2 className="size-3.5" style={{ color: 'var(--danger)' }} />
                    </button>
                  )}
                </div>

                {/* Contact picker */}
                {contacts.length > 0 && (
                  <select
                    className="w-full rounded-xl px-3 py-2 text-xs outline-none"
                    style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)', color: 'var(--muted)' }}
                    value=""
                    onChange={e => {
                      const c = contacts.find(c => c.id === e.target.value)
                      if (c) updateRecipient(r.id, { address: c.address, label: c.name, addrError: '' })
                    }}
                  >
                    <option value="">Pick from contacts…</option>
                    {contacts.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                )}

                <input
                  className="w-full rounded-xl px-3 py-2.5 text-sm mono outline-none focus:ring-2"
                  style={{ background: 'var(--surface-muted)', border: `1px solid ${r.addrError ? 'var(--danger)' : 'var(--border)'}`, color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
                  placeholder="0x… wallet address"
                  value={r.address}
                  onChange={e => updateRecipient(r.id, { address: e.target.value, addrError: '' })}
                />
                {r.addrError && <p className="text-xs" style={{ color: 'var(--danger)' }}>{r.addrError}</p>}

                <div className="flex gap-2">
                  <input
                    className="flex-1 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
                    style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)', color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
                    placeholder="Label (optional)"
                    value={r.label}
                    onChange={e => updateRecipient(r.id, { label: e.target.value })}
                  />
                  <input
                    inputMode="decimal"
                    className="w-28 rounded-xl px-3 py-2.5 text-sm tabular-nums outline-none focus:ring-2"
                    style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)', color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
                    placeholder="USDC"
                    value={r.amount}
                    onChange={e => { const v = e.target.value.replace(/[^0-9.]/g, ''); if (v === '' || /^\d*\.?\d*$/.test(v)) updateRecipient(r.id, { amount: v }) }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <button onClick={addRecipient} className="flex w-full items-center justify-center gap-2 rounded-2xl py-2.5 text-sm font-semibold transition-all hover:scale-[1.01]"
          style={{ border: '1.5px dashed var(--border)', color: 'var(--muted)', background: 'transparent' }}>
          <Plus className="size-4" /> Add recipient
        </button>
      </section>

      {/* Step indicator */}
      {step !== 'idle' && step !== 'done' && (
        <div className="rounded-2xl px-4 py-3 flex items-center gap-2 text-sm"
          style={{ background: 'rgba(133,177,237,0.1)', border: '1px solid rgba(133,177,237,0.25)' }}>
          <Loader2 className="size-4 animate-spin shrink-0" style={{ color: 'var(--accent-hover)' }} />
          <span style={{ color: 'var(--ink-2)' }}>
            {step === 'approving' && 'Approving USDC spend…'}
            {step === 'sending' && `Sending to recipient ${currentIdx + 1} of ${recipients.length}…`}
          </span>
        </div>
      )}

      {/* Send button */}
      {!authenticated ? (
        <button onClick={login} className="w-full flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-white" style={{ background: 'var(--accent)' }}>
          Sign In to Send
        </button>
      ) : step === 'done' ? (
        <div className="space-y-3">
          <div className="rounded-2xl p-4" style={{ background: 'rgba(26,128,71,0.08)', border: '1px solid rgba(26,128,71,0.22)' }}>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="size-5" style={{ color: 'var(--success)' }} />
              <span className="font-semibold text-sm" style={{ color: 'var(--success)' }}>All payments sent!</span>
            </div>
            <p className="text-xs mb-3" style={{ color: 'var(--muted)' }}>
              ${totalAmount.toFixed(2)} USDC split across {recipients.length} recipients.
            </p>
            <div className="space-y-1">
              {txHashes.map((hash, i) => (
                <a key={hash} href={buildTxExplorerUrl(TARGET_CHAIN_ID, hash)} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1 text-xs font-medium" style={{ color: 'var(--accent-hover)' }}>
                  Recipient {i + 1} tx <ExternalLink className="size-3" />
                </a>
              ))}
            </div>
          </div>
          <button onClick={reset} className="w-full rounded-2xl py-3 text-sm font-semibold" style={{ background: 'var(--surface-muted)', color: 'var(--ink-2)', border: '1px solid var(--border)' }}>
            New split payment
          </button>
        </div>
      ) : (
        <button onClick={handleSend} disabled={isBusy || totalAmount === 0}
          className="w-full flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.01] disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ background: 'var(--accent)' }}>
          {isSwitching ? <><Loader2 className="size-4 animate-spin" /> Switching…</> :
           wrongChain ? 'Switch to Arc Mainnet' :
           isBusy ? <><Loader2 className="size-4 animate-spin" /> Processing…</> :
           <><SplitSquareHorizontal className="size-4" /> Send ${totalAmount.toFixed(2)} to {recipients.length} recipients</>}
        </button>
      )}

      {writeError && (
        <div className="rounded-2xl p-4 flex items-start gap-2" style={{ background: 'rgba(186,43,76,0.08)', border: '1px solid rgba(186,43,76,0.22)' }}>
          <AlertCircle className="size-4 mt-0.5 shrink-0" style={{ color: 'var(--danger)' }} />
          <div>
            <p className="text-sm font-semibold" style={{ color: 'var(--danger)' }}>Transaction failed</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
              {writeError.message.includes('User rejected') ? 'You cancelled.' : 'Please try again.'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
