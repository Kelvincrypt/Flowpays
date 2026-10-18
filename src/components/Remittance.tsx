import { useState, useMemo } from 'react'
import {
  useAccount, useReadContract, useWriteContract,
  useWaitForTransactionReceipt, useSwitchChain,
} from 'wagmi'
import { erc20Abi, isAddress } from 'viem'
import { AnimatePresence, motion } from 'framer-motion'
import { usePrivy } from '@privy-io/react-auth'
import { Globe, ArrowRight, Loader2, CheckCircle2, ExternalLink, AlertCircle, Info, ShieldCheck } from 'lucide-react'
import ConfirmModal from './ConfirmModal'
import { TokenUSDC } from '@web3icons/react'
import { getUsdc, buildTxExplorerUrl } from '@/onchain-facts'
import { parseAmount, Amount, usdcDecimalsFor } from '@/onchain-money'
import { FLOWPAY_ADDRESS, FLOWPAY_ABI } from '@/flowpay-contract'

const TARGET_CHAIN_ID = 5042 // Arc Mainnet
const usdcFact = getUsdc(TARGET_CHAIN_ID)!

const CORRIDORS = [
  { code: 'NGN', flag: 'NG', label: 'Nigeria', currency: 'Naira', rate: 1620.5, symbol: '₦' },
  { code: 'GHS', flag: 'GH', label: 'Ghana', currency: 'Cedi', rate: 15.2, symbol: '₵' },
  { code: 'KES', flag: 'KE', label: 'Kenya', currency: 'Shilling', rate: 129.3, symbol: 'KSh' },
  { code: 'PHP', flag: 'PH', label: 'Philippines', currency: 'Peso', rate: 58.4, symbol: '₱' },
  { code: 'MXN', flag: 'MX', label: 'Mexico', currency: 'Peso', rate: 17.3, symbol: '$' },
  { code: 'INR', flag: 'IN', label: 'India', currency: 'Rupee', rate: 83.8, symbol: '₹' },
  { code: 'BRL', flag: 'BR', label: 'Brazil', currency: 'Real', rate: 5.1, symbol: 'R$' },
  { code: 'EGP', flag: 'EG', label: 'Egypt', currency: 'Pound', rate: 48.7, symbol: '£' },
]

const FEES = [
  { label: 'Network fee', value: '~$0.01', note: 'Arc gas (USDC)' },
  { label: 'FX fee', value: '0.5%', note: 'vs Western Union ~5-7%' },
]

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

function flagEmoji(code: string) {
  return code.toUpperCase().split('').map(c => String.fromCodePoint(c.charCodeAt(0) + 127397)).join('')
}

type SendStep = 'idle' | 'approving' | 'sending'

export default function Remittance() {
  const { authenticated, login } = usePrivy()
  const { address, isConnected, chainId } = useAccount()
  const { switchChain, isPending: isSwitching } = useSwitchChain()
  const wrongChain = isConnected && chainId !== TARGET_CHAIN_ID

  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [recipientError, setRecipientError] = useState('')
  const [selectedCorridor, setSelectedCorridor] = useState(CORRIDORS[0])
  const [memo, setMemo] = useState('')
  const [showFxInfo, setShowFxInfo] = useState(false)
  const [step, setStep] = useState<SendStep>('idle')
  const [showConfirm, setShowConfirm] = useState(false)

  // USDC balance
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

  // USDC allowance for FlowPay contract
  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    address: usdcFact.address as `0x${string}`,
    abi: erc20Abi,
    functionName: 'allowance',
    args: address ? [address, FLOWPAY_ADDRESS] : undefined,
    chainId: TARGET_CHAIN_ID,
    query: { enabled: !!address },
  })

  // FX preview
  const fxAmount = useMemo(() => {
    const n = Number(amount)
    if (!n || isNaN(n)) return null
    const fee = n * 0.005
    const net = n - fee
    const local = net * selectedCorridor.rate
    return { fee: fee.toFixed(4), net: net.toFixed(2), local: local.toFixed(2) }
  }, [amount, selectedCorridor])

  // Approve write
  const { writeContract: approve, data: approveTxHash, isPending: isApproving, reset: resetApprove } = useWriteContract()
  const { isSuccess: approveSuccess } = useWaitForTransactionReceipt({ hash: approveTxHash })

  // sendRemittance write
  const { writeContract: sendTx, data: txHash, isPending: isSending, error: writeError, reset } = useWriteContract()
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash: txHash })

  // After approve confirmed: send remittance
  if (approveSuccess && step === 'approving') {
    setStep('sending')
    resetApprove()
    const parsed = parseAmount(TARGET_CHAIN_ID, amount)
    sendTx({
      address: FLOWPAY_ADDRESS,
      abi: FLOWPAY_ABI,
      functionName: 'sendRemittance',
      args: [
        recipient as `0x${string}`,
        parsed.raw,
        selectedCorridor.code,
        memo.slice(0, 80),
      ],
      chainId: TARGET_CHAIN_ID,
    })
    void refetchAllowance()
  }

  // After sendRemittance confirmed
  if (isSuccess && step === 'sending') {
    setStep('idle')
  }

  const valid = isAddress(recipient) && Number(amount) > 0
  const isBusy = step !== 'idle' || isApproving || isSending || isConfirming

  // Called by ConfirmModal "Confirm & Send"
  const executeSend = () => {
    setShowConfirm(false)
    const parsed = parseAmount(TARGET_CHAIN_ID, amount)
    const currentAllowance = allowance ?? 0n

    if (currentAllowance >= parsed.raw) {
      setStep('sending')
      sendTx({
        address: FLOWPAY_ADDRESS,
        abi: FLOWPAY_ABI,
        functionName: 'sendRemittance',
        args: [recipient as `0x${string}`, parsed.raw, selectedCorridor.code, memo.slice(0, 80)],
        chainId: TARGET_CHAIN_ID,
      })
    } else {
      setStep('approving')
      const MAX = BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
      approve({
        address: usdcFact.address as `0x${string}`,
        abi: erc20Abi,
        functionName: 'approve',
        args: [FLOWPAY_ADDRESS, MAX],
        chainId: TARGET_CHAIN_ID,
      })
    }
  }

  // Primary send handler — validates then opens confirm modal
  const handleSend = () => {
    if (wrongChain) { switchChain({ chainId: TARGET_CHAIN_ID }); return }
    if (!isAddress(recipient)) { setRecipientError('Invalid address'); return }
    setRecipientError('')
    setShowConfirm(true)
  }

  const txUrl = txHash ? buildTxExplorerUrl(TARGET_CHAIN_ID, txHash) : null

  const sendBtnLabel = () => {
    if (isSwitching) return <><Loader2 className="size-4 animate-spin" /> Switching network…</>
    if (wrongChain) return 'Switch to Arc Mainnet'
    if (step === 'approving' || isApproving) return <><Loader2 className="size-4 animate-spin" /> Approving USDC…</>
    if (step === 'sending' || isSending) return <><Loader2 className="size-4 animate-spin" /> Confirm in wallet…</>
    if (isConfirming) return <><Loader2 className="size-4 animate-spin" /> Sending…</>
    return <>Send to {selectedCorridor.label} <ArrowRight className="size-4" /></>
  }

  const confirmRows = [
    { label: 'You send', value: `${Number(amount).toFixed(2)} USDC` },
    { label: 'Recipient', value: recipient ? recipient.slice(0, 10) + '…' + recipient.slice(-6) : '' },
    { label: 'Corridor', value: `${flagEmoji(selectedCorridor.flag)} ${selectedCorridor.label} (${selectedCorridor.code})` },
    { label: 'They receive (approx)', value: fxAmount ? `${selectedCorridor.symbol}${Number(fxAmount.local).toLocaleString()} ${selectedCorridor.code}` : '—', highlight: true },
    { label: 'FX fee (0.5%)', value: fxAmount ? `$${Number(fxAmount.fee).toFixed(4)} USDC` : '—' },
    ...(memo ? [{ label: 'Message', value: memo }] : []),
  ]

  return (
    <div className="space-y-4">
      <ConfirmModal
        open={showConfirm}
        onConfirm={executeSend}
        onCancel={() => setShowConfirm(false)}
        title="Confirm Transfer"
        description="Please review your transfer details before sending."
        rows={confirmRows}
        confirmLabel="Confirm & Send"
        warning="This action is irreversible. Once confirmed, USDC will be transferred onchain immediately."
      />
      {/* Hero */}
      <section style={glass.card} className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Globe className="size-5" style={{ color: 'var(--accent)' }} />
          <span className="display text-lg font-bold" style={{ color: 'var(--ink)' }}>Send Home</span>
        </div>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          Send USDC — recipient gets local currency. No wire fees, no intermediaries.
        </p>
        <div className="mt-3 flex items-center gap-2 rounded-xl px-3 py-2"
          style={{ background: 'rgba(26,128,71,0.08)', border: '1px solid rgba(26,128,71,0.22)' }}>
          <CheckCircle2 className="size-4 shrink-0" style={{ color: 'var(--success)' }} />
          <p className="text-xs font-medium" style={{ color: 'var(--success)' }}>
            0.5% FX fee vs Western Union's 5–7% — save up to 10x on every transfer
          </p>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <ShieldCheck className="size-3.5" style={{ color: 'var(--success)' }} />
          <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>
            Settled via FlowPay contract — onchain record of every transfer
          </span>
        </div>
      </section>

      {/* Corridor selector */}
      <section style={glass.card} className="p-4">
        <p className="text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Send to</p>
        <div className="grid grid-cols-4 gap-2">
          {CORRIDORS.map(c => (
            <button key={c.code} onClick={() => setSelectedCorridor(c)}
              className="flex flex-col items-center gap-1 rounded-xl py-2.5 px-1 text-xs font-medium transition-all hover:scale-[1.04] active:scale-[0.97]"
              style={selectedCorridor.code === c.code
                ? { background: 'var(--accent)', color: '#fff', boxShadow: '0 2px 8px rgba(18,45,69,0.18)' }
                : { background: 'var(--surface-muted)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
              <span className="text-lg leading-none" aria-label={c.label}>{flagEmoji(c.flag)}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>
              1 USDC = {selectedCorridor.rate.toLocaleString()} {selectedCorridor.code}
            </span>
            <button onClick={() => setShowFxInfo(!showFxInfo)} className="flex items-center">
              <Info className="size-3.5" style={{ color: 'var(--subtle)' }} />
            </button>
          </div>
          <span className="text-xs" style={{ color: 'var(--subtle)' }}>Illustrative rate</span>
        </div>
        <AnimatePresence>
          {showFxInfo && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              className="mt-2 rounded-xl p-3 text-xs"
              style={{ background: 'rgba(133,177,237,0.12)', border: '1px solid rgba(133,177,237,0.3)', color: 'var(--muted)' }}>
              In production, rates come from a live oracle (e.g. Chainlink). For this testnet demo, rates are illustrative.
              The USDC transfer and corridor code are recorded onchain via the FlowPay contract.
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Amount & recipient */}
      <section style={glass.card} className="p-4 space-y-3">
        <div>
          <label className="mb-1.5 block text-xs font-semibold" style={{ color: 'var(--muted)' }}>You send (USDC)</label>
          <div style={glass.inner} className="p-3">
            <div className="flex items-center gap-2">
              <TokenUSDC variant="branded" size={20} />
              <input inputMode="decimal" value={amount}
                onChange={e => { const v = e.target.value.replace(/[^0-9.]/g, ''); if (v === '' || /^\d*\.?\d*$/.test(v)) setAmount(v) }}
                placeholder="0.00"
                className="display flex-1 bg-transparent text-3xl font-bold tabular-nums outline-none placeholder:text-slate-300"
                style={{ color: 'var(--ink)' }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs" style={{ color: 'var(--subtle)' }}>USDC on Arc</span>
              <button onClick={() => setAmount(formattedBalance)} className="text-xs font-semibold"
                style={{ color: 'var(--accent-hover)' }}>
                Balance: {formattedBalance} · Max
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {fxAmount && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-2 px-3 py-2" style={{ background: 'var(--surface-muted)' }}>
                <div className="flex-1">
                  <p className="text-xs" style={{ color: 'var(--subtle)' }}>You send</p>
                  <p className="display font-bold tabular-nums" style={{ color: 'var(--ink)' }}>${Number(amount).toFixed(2)} USDC</p>
                </div>
                <ArrowRight className="size-4 shrink-0" style={{ color: 'var(--muted)' }} />
                <div className="flex-1 text-right">
                  <p className="text-xs" style={{ color: 'var(--subtle)' }}>They receive</p>
                  <p className="display font-bold tabular-nums" style={{ color: 'var(--success)' }}>
                    {selectedCorridor.symbol}{Number(fxAmount.local).toLocaleString()} {selectedCorridor.code}
                  </p>
                </div>
              </div>
              <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
                {FEES.map(f => (
                  <div key={f.label} className="flex items-center justify-between px-3 py-2">
                    <div>
                      <p className="text-xs font-medium" style={{ color: 'var(--ink-2)' }}>{f.label}</p>
                      <p className="text-xs" style={{ color: 'var(--subtle)' }}>{f.note}</p>
                    </div>
                    <span className="text-xs font-semibold tabular-nums" style={{ color: 'var(--muted)' }}>
                      {f.label === 'FX fee' ? `$${Number(fxAmount.fee).toFixed(4)}` : f.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div>
          <label className="mb-1.5 block text-xs font-semibold" style={{ color: 'var(--muted)' }}>Recipient wallet address</label>
          <input
            className="w-full rounded-xl px-3 py-2.5 text-sm mono outline-none focus:ring-2"
            style={{ background: 'var(--surface-muted)', border: `1px solid ${recipientError ? 'var(--danger)' : 'var(--border)'}`, color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
            value={recipient}
            onChange={e => { setRecipient(e.target.value); setRecipientError('') }}
            placeholder="0x…"
          />
          {recipientError && <p className="text-xs mt-1" style={{ color: 'var(--danger)' }}>{recipientError}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold" style={{ color: 'var(--muted)' }}>Message (optional)</label>
          <input
            className="w-full rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
            style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)', color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
            value={memo} onChange={e => setMemo(e.target.value)}
            placeholder="For school fees — October" maxLength={80}
          />
        </div>

        {/* Step indicator */}
        {step !== 'idle' && (
          <div className="rounded-xl px-3 py-2 text-xs flex items-center gap-2"
            style={{ background: 'rgba(133,177,237,0.1)', border: '1px solid rgba(133,177,237,0.25)' }}>
            <Loader2 className="size-3.5 animate-spin shrink-0" style={{ color: 'var(--accent-hover)' }} />
            <span style={{ color: 'var(--ink-2)' }}>
              {step === 'approving' && 'Step 1/2 — Approve USDC spend in your wallet…'}
              {step === 'sending' && 'Step 2/2 — Confirm remittance in your wallet…'}
            </span>
          </div>
        )}

        {!authenticated ? (
          <div className="pt-1">
            <button onClick={login}
              className="w-full flex items-center justify-center gap-1.5 rounded-2xl py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.01]"
              style={{ background: 'var(--accent)' }}>
              Sign In to Send
            </button>
          </div>
        ) : (
          <button onClick={handleSend}
            disabled={(!valid && !wrongChain) || isBusy}
            className="w-full flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
            style={{ background: 'var(--accent)' }}>
            {sendBtnLabel()}
          </button>
        )}

        <AnimatePresence>
          {isSuccess && txUrl && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              className="rounded-2xl p-4" style={{ background: 'rgba(26,128,71,0.08)', border: '1px solid rgba(26,128,71,0.22)' }}>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="size-5" style={{ color: 'var(--success)' }} />
                <span className="font-semibold text-sm" style={{ color: 'var(--success)' }}>Transfer recorded onchain!</span>
              </div>
              <p className="text-xs mb-2" style={{ color: 'var(--muted)' }}>
                {Number(amount).toFixed(2)} USDC sent via FlowPay contract. Recipient gets approx.{' '}
                <strong>{fxAmount ? `${selectedCorridor.symbol}${Number(fxAmount.local).toLocaleString()} ${selectedCorridor.code}` : '—'}</strong>.
              </p>
              <a href={txUrl} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium" style={{ color: 'var(--accent-hover)' }}>
                View on ArcScan <ExternalLink className="size-3" />
              </a>
              <button
                onClick={() => { reset(); setAmount(''); setRecipient(''); setMemo(''); setStep('idle') }}
                className="mt-3 w-full rounded-xl py-2 text-xs font-semibold"
                style={{ background: 'var(--surface-muted)', color: 'var(--ink-2)', border: '1px solid var(--border)' }}>
                Send another
              </button>
            </motion.div>
          )}
          {writeError && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
              className="rounded-2xl p-4 flex items-start gap-2"
              style={{ background: 'rgba(186,43,76,0.08)', border: '1px solid rgba(186,43,76,0.22)' }}>
              <AlertCircle className="size-4 mt-0.5 shrink-0" style={{ color: 'var(--danger)' }} />
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--danger)' }}>Transfer failed</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
                  {writeError.message.includes('User rejected') ? 'You cancelled the transaction.' : 'Please try again.'}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Comparison */}
      <section style={glass.card} className="p-4">
        <p className="text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Why not Western Union?</p>
        <div className="space-y-2">
          {[
            { label: 'Western Union', fee: '5–7%', speed: '1–5 days', bad: true },
            { label: 'FlowPay (USDC)', fee: '0.5%', speed: 'Seconds', bad: false },
          ].map(row => (
            <div key={row.label} className="flex items-center justify-between rounded-xl px-3 py-2.5"
              style={row.bad
                ? { background: 'rgba(186,43,76,0.06)', border: '1px solid rgba(186,43,76,0.18)' }
                : { background: 'rgba(26,128,71,0.08)', border: '1px solid rgba(26,128,71,0.22)' }}>
              <span className="text-sm font-semibold" style={{ color: row.bad ? 'var(--danger)' : 'var(--success)' }}>
                {row.label}
              </span>
              <div className="flex items-center gap-3 text-xs tabular-nums">
                <span style={{ color: 'var(--muted)' }}>Fee: <strong>{row.fee}</strong></span>
                <span style={{ color: 'var(--muted)' }}>Speed: <strong>{row.speed}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
