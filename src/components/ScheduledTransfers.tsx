import { useState, useCallback, useMemo } from 'react'
import {
  useAccount, useReadContract, useWriteContract,
  useWaitForTransactionReceipt, useSwitchChain,
} from 'wagmi'
import { erc20Abi, isAddress } from 'viem'
import { AnimatePresence, motion } from 'framer-motion'
import { usePrivy } from '@privy-io/react-auth'
import {
  Calendar, Plus, Trash2, Clock, Loader2, CheckCircle2,
  ExternalLink, ChevronRight, AlertCircle, ShieldCheck,
} from 'lucide-react'
import { TokenUSDC } from '@web3icons/react'
import { getUsdc, buildTxExplorerUrl } from '@/onchain-facts'
import { parseAmount, usdcDecimalsFor, Amount } from '@/onchain-money'
import { toast } from 'sonner'
import { FLOWPAY_ADDRESS, FLOWPAY_ABI, Frequency, Category } from '@/flowpay-contract'

const TARGET_CHAIN_ID = 5042 // Arc Mainnet

const usdcFact = getUsdc(TARGET_CHAIN_ID)!

// Module-level date constants — computed once at load time
const NOW_MS = Date.now()
const TODAY_DATE_STR = new Date(NOW_MS).toISOString().slice(0, 10)

// ── Types ────────────────────────────────────────────────────────────────────
type FreqKey = 'once' | 'weekly' | 'monthly'
type CatKey = 'rent' | 'school' | 'subscription' | 'other'

interface Schedule {
  id: string           // local UUID (before onchain id is known)
  onchainId?: bigint   // set after createSchedule confirms
  label: string
  recipient: string
  amount: string
  frequency: FreqKey
  nextDate: string     // ISO date string
  category: CatKey
  active: boolean
  lastTxHash?: string
}

// ── Helpers ──────────────────────────────────────────────────────────────────
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

const FREQ_LABELS: Record<FreqKey, string> = { once: 'One-time', weekly: 'Weekly', monthly: 'Monthly' }
const CAT_LABELS: Record<CatKey, string> = { rent: 'Rent', school: 'School Fees', subscription: 'Subscription', other: 'Other' }
const CAT_COLORS: Record<CatKey, string> = {
  rent: '#3b82f6', school: '#8b5cf6', subscription: '#f59e0b', other: 'var(--muted)',
}

const FREQ_MAP: Record<FreqKey, number> = {
  once: Frequency.Once, weekly: Frequency.Weekly, monthly: Frequency.Monthly,
}
const CAT_MAP: Record<CatKey, number> = {
  rent: Category.Rent, school: Category.School,
  subscription: Category.Subscription, other: Category.Other,
}

function formatAddress(addr: string) {
  return addr.slice(0, 6) + '…' + addr.slice(-4)
}

function nextOccurrence(freq: FreqKey, from: string): string {
  if (freq === 'once') return from
  const d = new Date(from)
  if (freq === 'weekly') d.setDate(d.getDate() + 7)
  if (freq === 'monthly') d.setMonth(d.getMonth() + 1)
  return d.toISOString().slice(0, 10)
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function ScheduledTransfers() {
  const { authenticated, login } = usePrivy()
  const { address, isConnected, chainId } = useAccount()
  const { switchChain, isPending: isSwitching } = useSwitchChain()
  const wrongChain = isConnected && chainId !== TARGET_CHAIN_ID

  const [schedules, setSchedules] = useState<Schedule[]>(() => {
    try { return JSON.parse(localStorage.getItem('flowpay_schedules') ?? '[]') as Schedule[] }
    catch { return [] }
  })

  const saveSchedules = useCallback((next: Schedule[]) => {
    setSchedules(next)
    localStorage.setItem('flowpay_schedules', JSON.stringify(next, (_k, v) =>
      typeof v === 'bigint' ? v.toString() : v as unknown))
  }, [])

  const [showSheet, setShowSheet] = useState(false)

  // Track which schedule is in each step of the 2-step flow
  type Step = 'approving' | 'creating' | 'executing' | null
  const [activeId, setActiveId] = useState<string | null>(null)
  const [activeStep, setActiveStep] = useState<Step>(null)

  // ── USDC balance ─────────────────────────────────────────────────────────
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

  // ── USDC allowance for FlowPay contract ─────────────────────────────────
  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    address: usdcFact.address as `0x${string}`,
    abi: erc20Abi,
    functionName: 'allowance',
    args: address ? [address, FLOWPAY_ADDRESS] : undefined,
    chainId: TARGET_CHAIN_ID,
    query: { enabled: !!address },
  })

  // ── Write hooks ─────────────────────────────────────────────────────────
  const { writeContract: approve, data: approveTxHash, isPending: isApproving, reset: resetApprove } = useWriteContract()
  const { isSuccess: approveSuccess } = useWaitForTransactionReceipt({ hash: approveTxHash })

  const { writeContract: createScheduleTx, data: createTxHash, isPending: isCreating, reset: resetCreate } = useWriteContract()
  const { isSuccess: createSuccess, isLoading: createConfirming } = useWaitForTransactionReceipt({ hash: createTxHash })

  const { writeContract: executeTx, data: execTxHash, isPending: _isExecuting, reset: resetExec, error: execError } = useWriteContract()
  const { isSuccess: execSuccess, isLoading: execConfirming } = useWaitForTransactionReceipt({ hash: execTxHash })

  const { writeContract: cancelTx, data: cancelTxHash, isPending: isCancelling } = useWriteContract()
  const { isSuccess: cancelSuccess } = useWaitForTransactionReceipt({ hash: cancelTxHash })

  // ── After approve confirmed: proceed to create ──────────────────────────
  if (approveSuccess && activeStep === 'approving' && activeId) {
    const schedule = schedules.find(s => s.id === activeId)
    if (schedule) {
      setActiveStep('creating')
      resetApprove()
      const parsed = parseAmount(TARGET_CHAIN_ID, schedule.amount)
      const nextTs = BigInt(Math.floor(new Date(schedule.nextDate + 'T00:00:00').getTime() / 1000))
      createScheduleTx({
        address: FLOWPAY_ADDRESS,
        abi: FLOWPAY_ABI,
        functionName: 'createSchedule',
        args: [
          schedule.recipient as `0x${string}`,
          parsed.raw,
          FREQ_MAP[schedule.frequency],
          schedule.label,
          CAT_MAP[schedule.category],
          nextTs,
        ],
        chainId: TARGET_CHAIN_ID,
      })
      void refetchAllowance()
    }
  }

  // ── After createSchedule confirmed ───────────────────────────────────────
  if (createSuccess && activeStep === 'creating' && activeId) {
    saveSchedules(schedules.map(s =>
      s.id === activeId ? { ...s, lastTxHash: createTxHash } : s,
    ))
    setActiveId(null)
    setActiveStep(null)
    resetCreate()
    toast.success('Schedule created onchain!')
  }

  // ── After executeSchedule confirmed ──────────────────────────────────────
  if (execSuccess && activeStep === 'executing' && activeId) {
    saveSchedules(schedules.map(s => {
      if (s.id !== activeId) return s
      return {
        ...s,
        lastTxHash: execTxHash,
        nextDate: nextOccurrence(s.frequency, s.nextDate),
        active: s.frequency !== 'once',
      }
    }))
    setActiveId(null)
    setActiveStep(null)
    resetExec()
    toast.success('Payment sent onchain!')
  }

  // ── After cancel confirmed ────────────────────────────────────────────────
  if (cancelSuccess && cancelTxHash) {
    // The cancelled schedule's onchainId is no longer active; keep UI in sync
    toast.success('Schedule cancelled onchain.')
  }

  // ── Create flow: approve then createSchedule ─────────────────────────────
  const handleCreate = useCallback(
    (schedule: Schedule) => {
      if (wrongChain) { switchChain({ chainId: TARGET_CHAIN_ID }); return }
      if (!isAddress(schedule.recipient)) { toast.error('Invalid recipient address'); return }
      const parsed = parseAmount(TARGET_CHAIN_ID, schedule.amount)
      const currentAllowance = allowance ?? 0n

      setActiveId(schedule.id)

      if (currentAllowance >= parsed.raw) {
        // Already approved enough — skip to create
        setActiveStep('creating')
        const nextTs = BigInt(Math.floor(new Date(schedule.nextDate + 'T00:00:00').getTime() / 1000))
        createScheduleTx({
          address: FLOWPAY_ADDRESS,
          abi: FLOWPAY_ABI,
          functionName: 'createSchedule',
          args: [
            schedule.recipient,
            parsed.raw,
            FREQ_MAP[schedule.frequency],
            schedule.label,
            CAT_MAP[schedule.category],
            nextTs,
          ],
          chainId: TARGET_CHAIN_ID,
        })
      } else {
        setActiveStep('approving')
        // Approve a large amount so future schedules don't need re-approval
        const MAX = BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
        approve({
          address: usdcFact.address as `0x${string}`,
          abi: erc20Abi,
          functionName: 'approve',
          args: [FLOWPAY_ADDRESS, MAX],
          chainId: TARGET_CHAIN_ID,
        })
      }
    },
    [wrongChain, switchChain, allowance, approve, createScheduleTx],
  )

  // ── Execute flow ─────────────────────────────────────────────────────────
  const handleExecute = useCallback(
    (schedule: Schedule) => {
      if (wrongChain) { switchChain({ chainId: TARGET_CHAIN_ID }); return }
      if (!schedule.onchainId) {
        toast.error('This schedule has not been registered onchain yet. Please re-create it.')
        return
      }
      setActiveId(schedule.id)
      setActiveStep('executing')
      executeTx({
        address: FLOWPAY_ADDRESS,
        abi: FLOWPAY_ABI,
        functionName: 'executeSchedule',
        args: [schedule.onchainId],
        chainId: TARGET_CHAIN_ID,
      })
    },
    [wrongChain, switchChain, executeTx],
  )

  // ── Cancel flow ─────────────────────────────────────────────────────────
  const handleCancel = useCallback(
    (schedule: Schedule) => {
      if (schedule.onchainId) {
        cancelTx({
          address: FLOWPAY_ADDRESS,
          abi: FLOWPAY_ABI,
          functionName: 'cancelSchedule',
          args: [schedule.onchainId],
          chainId: TARGET_CHAIN_ID,
        })
      }
      saveSchedules(schedules.filter(s => s.id !== schedule.id))
    },
    [cancelTx, saveSchedules, schedules],
  )

  // ── Upcoming (next 7 days) ───────────────────────────────────────────────
  const upcoming = useMemo(() => {
    const todayMs = NOW_MS - (NOW_MS % 86400000)
    const in7Ms = todayMs + 7 * 86400000
    return schedules.filter(s => {
      const dMs = new Date(s.nextDate + 'T00:00:00').getTime()
      return s.active && dMs >= todayMs && dMs <= in7Ms
    })
  }, [schedules])

  return (
    <div className="space-y-4">
      {/* Balance card */}
      <section style={glass.card} className="p-5">
        <div className="mb-3 flex items-center gap-1.5">
          <TokenUSDC variant="branded" size={18} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            Available Balance
          </span>
        </div>
        {authenticated ? (
          <div className="flex items-baseline gap-1.5">
            <span className="display text-4xl font-bold tabular-nums" style={{ color: 'var(--ink)' }}>
              {formattedBalance}
            </span>
            <span className="text-lg font-medium" style={{ color: 'var(--subtle)' }}>USDC</span>
          </div>
        ) : (
          <div className="flex flex-col items-start gap-3">
            <span className="text-sm" style={{ color: 'var(--muted)' }}>Sign in to see your balance</span>
            <button
              onClick={login}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
              style={{ background: 'var(--accent)' }}
            >Sign In</button>
          </div>
        )}
        {/* Contract badge */}
        <div className="mt-3 flex items-center gap-1.5">
          <ShieldCheck className="size-3.5" style={{ color: 'var(--success)' }} />
          <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>Powered by FlowPay contract on Arc Mainnet</span>
        </div>
      </section>

      {/* Upcoming alert */}
      {upcoming.length > 0 && (
        <div className="flex items-start gap-3 rounded-2xl p-4"
          style={{ background: 'rgba(26,128,71,0.08)', border: '1px solid rgba(26,128,71,0.22)' }}>
          <Clock className="size-4 mt-0.5 shrink-0" style={{ color: 'var(--success)' }} />
          <div>
            <p className="text-sm font-semibold" style={{ color: 'var(--success)' }}>
              {upcoming.length} payment{upcoming.length > 1 ? 's' : ''} due this week
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
              {upcoming.map(s => s.label).join(', ')}
            </p>
          </div>
        </div>
      )}

      {/* Schedule list */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold" style={{ color: 'var(--ink-2)' }}>Your schedules</span>
          <button
            onClick={() => setShowSheet(true)}
            className="flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            <Plus className="size-3.5" /> New
          </button>
        </div>

        {schedules.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-2 rounded-2xl py-10" style={glass.inner}>
            <Calendar className="size-8" style={{ color: 'var(--border-strong)' }} />
            <p className="text-sm font-medium" style={{ color: 'var(--muted)' }}>No schedules yet</p>
            <p className="text-xs" style={{ color: 'var(--subtle)' }}>Tap "New" to set up your first recurring payment</p>
          </div>
        )}

        {schedules.map(schedule => (
          <ScheduleCard
            key={schedule.id}
            schedule={schedule}
            onCreate={() => handleCreate(schedule)}
            onExecute={() => handleExecute(schedule)}
            onDelete={() => handleCancel(schedule)}
            activeStep={activeId === schedule.id ? activeStep : null}
            execTxHash={activeId === schedule.id && activeStep === 'executing' ? execTxHash : undefined}
            execError={activeId === schedule.id ? execError : null}
            isExecSuccess={activeId === schedule.id && execSuccess}
            isExecConfirming={activeId === schedule.id && execConfirming}
            isCancelling={isCancelling}
            wrongChain={wrongChain}
            isSwitching={isSwitching && wrongChain}
            isCreating={activeId === schedule.id && (isApproving || isCreating || createConfirming)}
          />
        ))}
      </div>

      <NewScheduleSheet
        open={showSheet}
        onClose={() => setShowSheet(false)}
        onAdd={s => {
          const updated = [...schedules, s]
          saveSchedules(updated)
          setShowSheet(false)
          // Immediately kick off the onchain create flow
          handleCreate(s)
        }}
      />
    </div>
  )
}

// ── Schedule Card ──────────────────────────────────────────────────────────
type StepVal = 'approving' | 'creating' | 'executing' | null

function ScheduleCard({
  schedule, onCreate, onExecute, onDelete,
  activeStep, execTxHash, execError, isExecSuccess,
  isExecConfirming, isCancelling, wrongChain, isSwitching, isCreating,
}: {
  schedule: Schedule
  onCreate: () => void
  onExecute: () => void
  onDelete: () => void
  activeStep: StepVal
  execTxHash?: `0x${string}`
  execError: Error | null
  isExecSuccess: boolean
  isExecConfirming: boolean
  isCancelling: boolean
  wrongChain: boolean
  isSwitching: boolean
  isCreating: boolean
}) {
  const txUrl = execTxHash ? buildTxExplorerUrl(TARGET_CHAIN_ID, execTxHash) : null
  const daysUntil = Math.ceil((new Date(schedule.nextDate + 'T00:00:00').getTime() - NOW_MS) / 86400000)
  const isPast = daysUntil < 0
  const isOnchain = !!schedule.onchainId

  const sendLabel = () => {
    if (isSwitching) return <><Loader2 className="size-4 animate-spin" />Switching…</>
    if (wrongChain) return 'Switch Network'
    if (activeStep === 'approving') return <><Loader2 className="size-4 animate-spin" />Approving…</>
    if (activeStep === 'creating' || isCreating) return <><Loader2 className="size-4 animate-spin" />Registering…</>
    if (activeStep === 'executing' || isExecConfirming) return <><Loader2 className="size-4 animate-spin" />Sending…</>
    if (!isOnchain) return 'Register Onchain'
    return 'Send Now'
  }

  const handleMainAction = () => {
    if (!isOnchain) { onCreate(); return }
    onExecute()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      style={{ ...glass.card, opacity: schedule.active ? 1 : 0.6 }}
      className="p-4"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div
            className="mt-0.5 size-2.5 rounded-full shrink-0"
            style={{ background: CAT_COLORS[schedule.category], marginTop: '5px' }}
          />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="font-semibold text-sm truncate" style={{ color: 'var(--ink)' }}>{schedule.label}</p>
              {isOnchain && (
                <span className="shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-semibold"
                  style={{ background: 'rgba(26,128,71,0.1)', color: 'var(--success)' }}>
                  Onchain
                </span>
              )}
            </div>
            <p className="text-xs mono truncate mt-0.5" style={{ color: 'var(--subtle)' }}>
              {formatAddress(schedule.recipient)}
            </p>
            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
              <span className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium"
                style={{ background: 'var(--surface-muted)', color: 'var(--muted)' }}>
                {CAT_LABELS[schedule.category]}
              </span>
              <span className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium"
                style={{ background: 'var(--surface-muted)', color: 'var(--muted)' }}>
                {FREQ_LABELS[schedule.frequency]}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className="display text-lg font-bold tabular-nums" style={{ color: 'var(--ink)' }}>
            ${Number(schedule.amount).toFixed(2)}
          </span>
          <span className="text-xs"
            style={{ color: isPast ? 'var(--danger)' : daysUntil === 0 ? 'var(--success)' : 'var(--muted)' }}>
            {isPast ? 'Overdue' : daysUntil === 0 ? 'Due today' : `In ${daysUntil}d`}
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={handleMainAction}
          disabled={!!activeStep || !schedule.active}
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-sm font-semibold transition-all hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
          style={{ background: 'var(--accent)', color: '#fff' }}
        >
          {sendLabel()}
        </button>

        <button
          onClick={onDelete}
          disabled={isCancelling}
          className="flex size-9 items-center justify-center rounded-xl transition-all hover:bg-red-50 disabled:opacity-40"
          style={{ border: '1px solid var(--border)' }}
        >
          <Trash2 className="size-4" style={{ color: 'var(--danger)' }} />
        </button>
      </div>

      {/* Step indicator */}
      {activeStep && (
        <div className="mt-2 rounded-xl px-3 py-2 text-xs flex items-center gap-2"
          style={{ background: 'rgba(133,177,237,0.1)', border: '1px solid rgba(133,177,237,0.25)' }}>
          <Loader2 className="size-3.5 animate-spin shrink-0" style={{ color: 'var(--accent-hover)' }} />
          <span style={{ color: 'var(--ink-2)' }}>
            {activeStep === 'approving' && 'Step 1/2 — Approving USDC spend in your wallet…'}
            {activeStep === 'creating' && 'Step 2/2 — Registering schedule onchain…'}
            {activeStep === 'executing' && 'Confirming payment on Arc…'}
          </span>
        </div>
      )}

      <AnimatePresence>
        {isExecSuccess && txUrl && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 rounded-xl p-3 flex items-center justify-between"
            style={{ background: 'rgba(26,128,71,0.08)', border: '1px solid rgba(26,128,71,0.22)' }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0" style={{ color: 'var(--success)' }} />
              <span className="text-xs font-semibold" style={{ color: 'var(--success)' }}>Sent onchain!</span>
            </div>
            <a href={txUrl} target="_blank" rel="noreferrer"
              className="flex items-center gap-1 text-xs font-medium" style={{ color: 'var(--accent-hover)' }}>
              View <ExternalLink className="size-3" />
            </a>
          </motion.div>
        )}
        {execError && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 rounded-xl p-3 flex items-center gap-2"
            style={{ background: 'rgba(186,43,76,0.08)', border: '1px solid rgba(186,43,76,0.22)' }}
          >
            <AlertCircle className="size-4 shrink-0" style={{ color: 'var(--danger)' }} />
            <span className="text-xs" style={{ color: 'var(--danger)' }}>
              {execError.message.includes('User rejected') ? 'Cancelled.' : 'Transaction failed. Try again.'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── New Schedule Sheet ─────────────────────────────────────────────────────
const springs = { sheet: { type: 'spring' as const, stiffness: 380, damping: 38 } }
const spectral = 'linear-gradient(90deg, #7c6bff 0%, #5b8fff 35%, #38c7b0 65%, #f5c84a 100%)'

function NewScheduleSheet({
  open, onClose, onAdd,
}: { open: boolean; onClose: () => void; onAdd: (s: Schedule) => void }) {
  const [label, setLabel] = useState('')
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [frequency, setFrequency] = useState<FreqKey>('monthly')
  const [category, setCategory] = useState<CatKey>('rent')
  const [nextDate, setNextDate] = useState(TODAY_DATE_STR)
  const [recipientError, setRecipientError] = useState('')

  const valid = label.trim() && isAddress(recipient) && Number(amount) > 0 && nextDate

  const handleAdd = () => {
    if (!isAddress(recipient)) { setRecipientError('Invalid Ethereum address'); return }
    setRecipientError('')
    onAdd({
      id: crypto.randomUUID(),
      label: label.trim(),
      recipient,
      amount,
      frequency,
      category,
      nextDate,
      active: true,
    })
    setLabel(''); setRecipient(''); setAmount('')
    setFrequency('monthly'); setCategory('rent')
    setNextDate(TODAY_DATE_STR)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/25 backdrop-blur-sm" />
          <motion.section
            className="relative w-full max-w-md overflow-hidden rounded-t-3xl"
            style={{ background: 'rgba(255,255,255,0.93)', backdropFilter: 'blur(40px) saturate(200%)', WebkitBackdropFilter: 'blur(40px) saturate(200%)' }}
            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={springs.sheet}
            onClick={e => e.stopPropagation()}
          >
            <div className="h-1 rounded-t-3xl" style={{ background: spectral }} />
            <div className="flex justify-center pt-3 pb-1">
              <div className="h-1 w-10 rounded-full bg-black/10" />
            </div>
            <div className="px-5 pb-8 pt-2 space-y-4">
              <h2 className="display text-xl font-bold" style={{ color: 'var(--ink)' }}>New Schedule</h2>

              <Field label="Label (e.g. Rent – Main St)">
                <input
                  className="w-full rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
                  style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)', color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
                  value={label} onChange={e => setLabel(e.target.value)} placeholder="Apartment rent"
                />
              </Field>

              <Field label="Category">
                <div className="grid grid-cols-4 gap-2">
                  {(Object.keys(CAT_LABELS) as CatKey[]).map(cat => (
                    <button key={cat} onClick={() => setCategory(cat)}
                      className="rounded-xl py-2 text-xs font-semibold transition-all"
                      style={category === cat
                        ? { background: 'var(--accent)', color: '#fff' }
                        : { background: 'var(--surface-muted)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
                      {CAT_LABELS[cat]}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Recipient address">
                <input
                  className="w-full rounded-xl px-3 py-2.5 text-sm mono outline-none focus:ring-2"
                  style={{ background: 'var(--surface-muted)', border: `1px solid ${recipientError ? 'var(--danger)' : 'var(--border)'}`, color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
                  value={recipient}
                  onChange={e => { setRecipient(e.target.value); setRecipientError('') }}
                  placeholder="0x…"
                />
                {recipientError && <p className="text-xs mt-1" style={{ color: 'var(--danger)' }}>{recipientError}</p>}
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Amount (USDC)">
                  <input inputMode="decimal"
                    className="w-full rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
                    style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)', color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
                    value={amount}
                    onChange={e => { const v = e.target.value.replace(/[^0-9.]/g, ''); if (v === '' || /^\d*\.?\d*$/.test(v)) setAmount(v) }}
                    placeholder="0.00"
                  />
                </Field>
                <Field label="Next date">
                  <input type="date"
                    className="w-full rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
                    style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)', color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
                    value={nextDate} onChange={e => setNextDate(e.target.value)} min={TODAY_DATE_STR}
                  />
                </Field>
              </div>

              <Field label="Frequency">
                <div className="flex gap-2">
                  {(Object.keys(FREQ_LABELS) as FreqKey[]).map(f => (
                    <button key={f} onClick={() => setFrequency(f)}
                      className="flex-1 rounded-xl py-2 text-xs font-semibold transition-all"
                      style={frequency === f
                        ? { background: 'var(--accent)', color: '#fff' }
                        : { background: 'var(--surface-muted)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
                      {FREQ_LABELS[f]}
                    </button>
                  ))}
                </div>
              </Field>

              <button
                onClick={handleAdd} disabled={!valid}
                className="w-full flex items-center justify-center gap-1.5 rounded-2xl py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
                style={{ background: 'var(--accent)' }}
              >
                Save &amp; Register Onchain <ChevronRight className="size-4" />
              </button>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold" style={{ color: 'var(--muted)' }}>{label}</label>
      {children}
    </div>
  )
}
