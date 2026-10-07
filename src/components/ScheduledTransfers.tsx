import { useState, useCallback, useMemo } from 'react'
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt, useSwitchChain } from 'wagmi'
import { erc20Abi, isAddress } from 'viem'
import { AnimatePresence, motion } from 'framer-motion'
import { usePrivy } from '@privy-io/react-auth'
import {
  Calendar, Plus, Trash2, Clock, Loader2, CheckCircle2, ExternalLink, ChevronRight, AlertCircle,
} from 'lucide-react'
import { TokenUSDC } from '@web3icons/react'
import { getUsdc, buildTxExplorerUrl } from '@/onchain-facts'
import { parseAmount, usdcDecimalsFor, Amount } from '@/onchain-money'
import { toast } from 'sonner'

const TARGET_CHAIN_ID = 5042002 // Arc Testnet

const usdcFact = getUsdc(TARGET_CHAIN_ID)!

// Module-level date constants — computed once at load time, outside React rendering
const NOW_MS = Date.now()
const TODAY_DATE_STR = new Date(NOW_MS).toISOString().slice(0, 10)

// ── Types ────────────────────────────────────────────────────────────────────
type Frequency = 'once' | 'weekly' | 'monthly'
type Category = 'rent' | 'school' | 'subscription' | 'other'

interface Schedule {
  id: string
  label: string
  recipient: string
  amount: string
  frequency: Frequency
  nextDate: string
  category: Category
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

const FREQ_LABELS: Record<Frequency, string> = { once: 'One-time', weekly: 'Weekly', monthly: 'Monthly' }
const CAT_LABELS: Record<Category, string> = { rent: 'Rent', school: 'School Fees', subscription: 'Subscription', other: 'Other' }

const CAT_COLORS: Record<Category, string> = {
  rent: '#3b82f6',
  school: '#8b5cf6',
  subscription: '#f59e0b',
  other: 'var(--muted)',
}

function formatAddress(addr: string) {
  return addr.slice(0, 6) + '…' + addr.slice(-4)
}

function nextOccurrence(freq: Frequency, from: string): string {
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

  // schedules stored in local state (persisted to localStorage)
  const [schedules, setSchedules] = useState<Schedule[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('flowpay_schedules') ?? '[]') as Schedule[]
    } catch {
      return []
    }
  })

  const saveSchedules = useCallback((next: Schedule[]) => {
    setSchedules(next)
    localStorage.setItem('flowpay_schedules', JSON.stringify(next))
  }, [])

  const [showSheet, setShowSheet] = useState(false)
  const [sending, setSending] = useState<string | null>(null) // schedule id being sent

  // ── USDC balance ────────────────────────────────────────────────────────
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
    : null

  // ── Send USDC ────────────────────────────────────────────────────────────
  const { writeContract, data: txHash, isPending, error: writeError, reset } = useWriteContract()
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash: txHash })

  const handleSend = useCallback(
    (schedule: Schedule) => {
      if (wrongChain) { switchChain({ chainId: TARGET_CHAIN_ID }); return }
      if (!isAddress(schedule.recipient)) { toast.error('Invalid recipient address'); return }
      const parsed = parseAmount(TARGET_CHAIN_ID, schedule.amount)
      setSending(schedule.id)
      writeContract({
        address: usdcFact.address as `0x${string}`,
        abi: erc20Abi,
        functionName: 'transfer',
        args: [schedule.recipient, parsed.raw],
        chainId: TARGET_CHAIN_ID,
      })
    },
    [wrongChain, switchChain, writeContract],
  )

  // After tx confirmed, update schedule
  if (isSuccess && sending && txHash) {
    const next = schedules.map((s) => {
      if (s.id !== sending) return s
      return {
        ...s,
        lastTxHash: txHash,
        nextDate: nextOccurrence(s.frequency, s.nextDate),
        active: s.frequency !== 'once',
      }
    })
    saveSchedules(next)
    setSending(null)
    reset()
  }

  const deleteSchedule = (id: string) =>
    saveSchedules(schedules.filter((s) => s.id !== id))

  const toggleActive = (id: string) =>
    saveSchedules(schedules.map((s) => s.id === id ? { ...s, active: !s.active } : s))

  // ── Upcoming (next 7 days) ───────────────────────────────────────────────
  const upcoming = useMemo(() => {
    const todayMs = NOW_MS - (NOW_MS % 86400000)
    const in7Ms = todayMs + 7 * 86400000
    return schedules.filter((s) => {
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
              {formattedBalance ?? '…'}
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
            >
              Sign In
            </button>
          </div>
        )}
        <p className="mt-1 text-xs" style={{ color: 'var(--subtle)' }}>Arc Testnet</p>
      </section>

      {/* Upcoming alert */}
      {upcoming.length > 0 && (
        <div
          className="flex items-start gap-3 rounded-2xl p-4"
          style={{ background: 'rgba(26,128,71,0.08)', border: '1px solid rgba(26,128,71,0.22)' }}
        >
          <Clock className="size-4 mt-0.5 shrink-0" style={{ color: 'var(--success)' }} />
          <div>
            <p className="text-sm font-semibold" style={{ color: 'var(--success)' }}>
              {upcoming.length} payment{upcoming.length > 1 ? 's' : ''} due this week
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
              {upcoming.map((s) => s.label).join(', ')}
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
          <div
            className="flex flex-col items-center justify-center gap-2 rounded-2xl py-10"
            style={glass.inner}
          >
            <Calendar className="size-8" style={{ color: 'var(--border-strong)' }} />
            <p className="text-sm font-medium" style={{ color: 'var(--muted)' }}>No schedules yet</p>
            <p className="text-xs" style={{ color: 'var(--subtle)' }}>Tap "New" to set up your first recurring payment</p>
          </div>
        )}

        {schedules.map((schedule) => (
          <ScheduleCard
            key={schedule.id}
            schedule={schedule}
            onSend={() => handleSend(schedule)}
            onDelete={() => deleteSchedule(schedule.id)}
            onToggle={() => toggleActive(schedule.id)}
            isSending={sending === schedule.id && (isPending || isConfirming)}
            isSuccess={sending === schedule.id && isSuccess}
            txHash={sending === schedule.id ? txHash : undefined}
            error={sending === schedule.id ? writeError : null}
            wrongChain={wrongChain}
            isSwitching={isSwitching && wrongChain}
          />
        ))}
      </div>

      {/* New schedule sheet */}
      <NewScheduleSheet
        open={showSheet}
        onClose={() => setShowSheet(false)}
        onAdd={(s) => {
          saveSchedules([...schedules, s])
          setShowSheet(false)
        }}
      />
    </div>
  )
}

// ── Schedule Card ──────────────────────────────────────────────────────────
function ScheduleCard({
  schedule, onSend, onDelete, onToggle,
  isSending, isSuccess, txHash, error, wrongChain, isSwitching,
}: {
  schedule: Schedule
  onSend: () => void
  onDelete: () => void
  onToggle: () => void
  isSending: boolean
  isSuccess: boolean
  txHash?: string
  error: Error | null
  wrongChain: boolean
  isSwitching: boolean
}) {
  const txUrl = txHash ? buildTxExplorerUrl(TARGET_CHAIN_ID, txHash) : null
  const daysUntil = Math.ceil((new Date(schedule.nextDate + 'T00:00:00').getTime() - NOW_MS) / 86400000)
  const isPast = daysUntil < 0

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
          {/* Category dot */}
          <div
            className="mt-0.5 size-2.5 rounded-full shrink-0"
            style={{ background: CAT_COLORS[schedule.category], marginTop: '5px' }}
          />
          <div className="min-w-0">
            <p className="font-semibold text-sm truncate" style={{ color: 'var(--ink)' }}>{schedule.label}</p>
            <p className="text-xs mono truncate mt-0.5" style={{ color: 'var(--subtle)' }}>
              {formatAddress(schedule.recipient)}
            </p>
            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
              <span
                className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium"
                style={{ background: 'var(--surface-muted)', color: 'var(--muted)' }}
              >
                {CAT_LABELS[schedule.category]}
              </span>
              <span
                className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium"
                style={{ background: 'var(--surface-muted)', color: 'var(--muted)' }}
              >
                {FREQ_LABELS[schedule.frequency]}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className="display text-lg font-bold tabular-nums" style={{ color: 'var(--ink)' }}>
            ${Number(schedule.amount).toFixed(2)}
          </span>
          <span
            className="text-xs"
            style={{ color: isPast ? 'var(--danger)' : daysUntil === 0 ? 'var(--success)' : 'var(--muted)' }}
          >
            {isPast ? 'Overdue' : daysUntil === 0 ? 'Due today' : `In ${daysUntil}d`}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={onSend}
          disabled={isSending || !schedule.active}
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-sm font-semibold transition-all hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
          style={{ background: 'var(--accent)', color: '#fff' }}
        >
          {isSwitching
            ? <><Loader2 className="size-4 animate-spin" /> Switching…</>
            : wrongChain
            ? 'Switch Network'
            : isSending
            ? <><Loader2 className="size-4 animate-spin" /> Sending…</>
            : 'Send Now'}
        </button>

        <button
          onClick={onToggle}
          className="rounded-xl px-3 py-2 text-xs font-semibold transition-all"
          style={
            schedule.active
              ? { background: 'var(--surface-muted)', color: 'var(--muted)' }
              : { background: 'rgba(26,128,71,0.1)', color: 'var(--success)' }
          }
        >
          {schedule.active ? 'Pause' : 'Resume'}
        </button>

        <button
          onClick={onDelete}
          className="flex size-9 items-center justify-center rounded-xl transition-all hover:bg-red-50"
          style={{ border: '1px solid var(--border)' }}
        >
          <Trash2 className="size-4" style={{ color: 'var(--danger)' }} />
        </button>
      </div>

      {/* Success receipt */}
      <AnimatePresence>
        {isSuccess && txUrl && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 rounded-xl p-3 flex items-center justify-between"
            style={{ background: 'rgba(26,128,71,0.08)', border: '1px solid rgba(26,128,71,0.22)' }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0" style={{ color: 'var(--success)' }} />
              <span className="text-xs font-semibold" style={{ color: 'var(--success)' }}>Sent!</span>
            </div>
            <a
              href={txUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs font-medium"
              style={{ color: 'var(--accent-hover)' }}
            >
              View <ExternalLink className="size-3" />
            </a>
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 rounded-xl p-3 flex items-center gap-2"
            style={{ background: 'rgba(186,43,76,0.08)', border: '1px solid rgba(186,43,76,0.22)' }}
          >
            <AlertCircle className="size-4 shrink-0" style={{ color: 'var(--danger)' }} />
            <span className="text-xs" style={{ color: 'var(--danger)' }}>
              {error.message.includes('User rejected') ? 'Cancelled.' : 'Transaction failed. Try again.'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── New Schedule Sheet ─────────────────────────────────────────────────────
const springs = {
  sheet: { type: 'spring' as const, stiffness: 380, damping: 38 },
}
const spectral = 'linear-gradient(90deg, #7c6bff 0%, #5b8fff 35%, #38c7b0 65%, #f5c84a 100%)'

function NewScheduleSheet({
  open, onClose, onAdd,
}: { open: boolean; onClose: () => void; onAdd: (s: Schedule) => void }) {
  const [label, setLabel] = useState('')
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [frequency, setFrequency] = useState<Frequency>('monthly')
  const [category, setCategory] = useState<Category>('rent')
  const [nextDate, setNextDate] = useState(TODAY_DATE_STR)
  const [recipientError, setRecipientError] = useState('')

  const valid =
    label.trim() &&
    isAddress(recipient) &&
    Number(amount) > 0 &&
    nextDate

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
    setLabel(''); setRecipient(''); setAmount(''); setFrequency('monthly'); setCategory('rent')
    setNextDate(TODAY_DATE_STR)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/25 backdrop-blur-sm" />
          <motion.section
            className="relative w-full max-w-md overflow-hidden rounded-t-3xl"
            style={{ background: 'rgba(255,255,255,0.93)', backdropFilter: 'blur(40px) saturate(200%)', WebkitBackdropFilter: 'blur(40px) saturate(200%)' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={springs.sheet}
            onClick={(e) => e.stopPropagation()}
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
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  placeholder="Apartment rent"
                />
              </Field>

              <Field label="Category">
                <div className="grid grid-cols-4 gap-2">
                  {(Object.keys(CAT_LABELS) as Category[]).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className="rounded-xl py-2 text-xs font-semibold transition-all"
                      style={
                        category === cat
                          ? { background: 'var(--accent)', color: '#fff' }
                          : { background: 'var(--surface-muted)', color: 'var(--muted)', border: '1px solid var(--border)' }
                      }
                    >
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
                  onChange={(e) => { setRecipient(e.target.value); setRecipientError('') }}
                  placeholder="0x…"
                />
                {recipientError && <p className="text-xs mt-1" style={{ color: 'var(--danger)' }}>{recipientError}</p>}
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Amount (USDC)">
                  <input
                    inputMode="decimal"
                    className="w-full rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
                    style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)', color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
                    value={amount}
                    onChange={(e) => {
                      const v = e.target.value.replace(/[^0-9.]/g, '')
                      if (v === '' || /^\d*\.?\d*$/.test(v)) setAmount(v)
                    }}
                    placeholder="0.00"
                  />
                </Field>
                <Field label="Next date">
                  <input
                    type="date"
                    className="w-full rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
                    style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)', color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
                    value={nextDate}
                    onChange={(e) => setNextDate(e.target.value)}
                    min={TODAY_DATE_STR}
                  />
                </Field>
              </div>

              <Field label="Frequency">
                <div className="flex gap-2">
                  {(Object.keys(FREQ_LABELS) as Frequency[]).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFrequency(f)}
                      className="flex-1 rounded-xl py-2 text-xs font-semibold transition-all"
                      style={
                        frequency === f
                          ? { background: 'var(--accent)', color: '#fff' }
                          : { background: 'var(--surface-muted)', color: 'var(--muted)', border: '1px solid var(--border)' }
                      }
                    >
                      {FREQ_LABELS[f]}
                    </button>
                  ))}
                </div>
              </Field>

              <button
                onClick={handleAdd}
                disabled={!valid}
                className="w-full flex items-center justify-center gap-1.5 rounded-2xl py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
                style={{ background: 'var(--accent)' }}
              >
                Save Schedule <ChevronRight className="size-4" />
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

