import { useState } from 'react'
import { useAccount } from 'wagmi'
import { useReadContract } from 'wagmi'
import { usePrivy } from '@privy-io/react-auth'
import { motion, AnimatePresence } from 'framer-motion'
import { History, ExternalLink, Calendar, Globe, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'
import { getUsdc, buildTxExplorerUrl } from '@/onchain-facts'
import { FLOWPAY_ADDRESS, FLOWPAY_ABI } from '@/flowpay-contract'

const TARGET_CHAIN_ID = 5042
const _usdcFact = getUsdc(TARGET_CHAIN_ID)

const glass = {
  card: {
    background: 'rgba(255,255,255,0.72)',
    backdropFilter: 'blur(24px) saturate(180%)',
    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
    border: '1px solid rgba(255,255,255,0.68)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(18,45,69,0.07), inset 0 1px 0 rgba(255,255,255,0.55)',
  } as React.CSSProperties,
}

function flagEmoji(code: string) {
  return code.toUpperCase().split('').map(c => String.fromCodePoint(c.charCodeAt(0) + 127397)).join('')
}

const CORRIDOR_MAP: Record<string, { label: string; flag: string; symbol: string; rate: number }> = {
  NGN: { label: 'Nigeria', flag: 'NG', symbol: '₦', rate: 1620.5 },
  GHS: { label: 'Ghana', flag: 'GH', symbol: '₵', rate: 15.2 },
  KES: { label: 'Kenya', flag: 'KE', symbol: 'KSh', rate: 129.3 },
  PHP: { label: 'Philippines', flag: 'PH', symbol: '₱', rate: 58.4 },
  MXN: { label: 'Mexico', flag: 'MX', symbol: '$', rate: 17.3 },
  INR: { label: 'India', flag: 'IN', symbol: '₹', rate: 83.8 },
  BRL: { label: 'Brazil', flag: 'BR', symbol: 'R$', rate: 5.1 },
  EGP: { label: 'Egypt', flag: 'EG', symbol: '£', rate: 48.7 },
}

const FREQ_LABELS = ['Once', 'Weekly', 'Monthly']
const CAT_LABELS = ['Rent', 'School', 'Subscription', 'Other']
const CAT_EMOJIS = ['🏠', '🎓', '📦', '💸']

type TabId = 'remittances' | 'schedules'

export default function TxHistory() {
  const { authenticated, login } = usePrivy()
  const { address } = useAccount()
  const [activeTab, setActiveTab] = useState<TabId>('remittances')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // Fetch remittance IDs
  const { data: remittanceIds, isLoading: loadingRem } = useReadContract({
    address: FLOWPAY_ADDRESS,
    abi: FLOWPAY_ABI,
    functionName: 'getRemittanceHistory',
    args: address ? [address] : undefined,
    chainId: TARGET_CHAIN_ID,
    query: { enabled: !!address && authenticated },
  })

  // Fetch schedule IDs
  const { data: scheduleIds, isLoading: loadingSch } = useReadContract({
    address: FLOWPAY_ADDRESS,
    abi: FLOWPAY_ABI,
    functionName: 'getUserSchedules',
    args: address ? [address] : undefined,
    chainId: TARGET_CHAIN_ID,
    query: { enabled: !!address && authenticated },
  })

  const remIds = (remittanceIds as bigint[] | undefined) ?? []
  const schIds = (scheduleIds as bigint[] | undefined) ?? []

  if (!authenticated) {
    return (
      <div style={glass.card} className="p-6 flex flex-col items-center gap-3 text-center">
        <div className="flex size-12 items-center justify-center rounded-2xl" style={{ background: 'rgba(18,45,69,0.07)' }}>
          <History className="size-6" style={{ color: 'var(--accent)' }} />
        </div>
        <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>Transaction History</p>
        <p className="text-xs" style={{ color: 'var(--muted)' }}>Sign in to see your past transfers and scheduled payments.</p>
        <button onClick={login} className="mt-1 rounded-2xl px-5 py-2.5 text-sm font-semibold text-white" style={{ background: 'var(--accent)' }}>Sign In</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <section style={glass.card} className="p-5">
        <div className="flex items-center gap-2 mb-1">
          <History className="size-5" style={{ color: 'var(--accent)' }} />
          <span className="display text-lg font-bold" style={{ color: 'var(--ink)' }}>History</span>
        </div>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>All your transfers and scheduled payments, pulled live from the contract.</p>
      </section>

      {/* Tab selector */}
      <div className="flex rounded-2xl p-1 gap-1" style={{ background: 'rgba(255,255,255,0.68)', border: '1px solid rgba(255,255,255,0.72)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', boxShadow: '0 2px 14px rgba(18,45,69,0.07)' }}>
        <button onClick={() => setActiveTab('remittances')} className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-semibold transition-all"
          style={activeTab === 'remittances' ? { background: 'var(--accent)', color: '#fff', boxShadow: '0 2px 8px rgba(18,45,69,0.2)' } : { color: 'var(--muted)' }}>
          <Globe className="size-4" /> Remittances
        </button>
        <button onClick={() => setActiveTab('schedules')} className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-semibold transition-all"
          style={activeTab === 'schedules' ? { background: 'var(--accent)', color: '#fff', boxShadow: '0 2px 8px rgba(18,45,69,0.2)' } : { color: 'var(--muted)' }}>
          <Calendar className="size-4" /> Schedules
        </button>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
          {activeTab === 'remittances'
            ? <RemittanceList ids={remIds} loading={loadingRem} expandedId={expandedId} setExpandedId={setExpandedId} />
            : <ScheduleList ids={schIds} loading={loadingSch} expandedId={expandedId} setExpandedId={setExpandedId} />
          }
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function RemittanceList({ ids, loading, expandedId, setExpandedId }: { ids: bigint[]; loading: boolean; expandedId: string | null; setExpandedId: (id: string | null) => void }) {
  if (loading) return <LoadingCards />
  if (ids.length === 0) return <EmptyState icon={<Globe className="size-6" />} title="No remittances yet" body="Your sent remittances will appear here once you make a transfer." />

  return (
    <div className="space-y-2">
      {[...ids].reverse().map(id => (
        <RemittanceRow key={id.toString()} id={id} expandedId={expandedId} setExpandedId={setExpandedId} />
      ))}
    </div>
  )
}

function RemittanceRow({ id, expandedId, setExpandedId }: { id: bigint; expandedId: string | null; setExpandedId: (id: string | null) => void }) {
  const key = `rem-${id.toString()}`
  const isOpen = expandedId === key

  const { data } = useReadContract({
    address: FLOWPAY_ADDRESS,
    abi: FLOWPAY_ABI,
    functionName: 'getRemittance',
    args: [id],
    chainId: TARGET_CHAIN_ID,
  })

  if (!data) return null
  const [sender, recipient, amount, corridorCode, memo, timestamp] = data as [string, string, bigint, string, string, bigint]
  const amountUsd = (Number(amount) / 1e6).toFixed(2)
  const corridor = CORRIDOR_MAP[corridorCode]
  const date = new Date(Number(timestamp) * 1000)
  const txUrl = buildTxExplorerUrl(TARGET_CHAIN_ID, `${id}`)

  return (
    <div style={glass.card} className="overflow-hidden">
      <button onClick={() => setExpandedId(isOpen ? null : key)} className="w-full flex items-center gap-3 p-4 text-left">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl text-xl" style={{ background: 'rgba(26,128,71,0.08)' }}>
          {corridor ? flagEmoji(corridor.flag) : '🌍'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{corridor?.label ?? corridorCode}</span>
            <span className="display font-bold text-sm tabular-nums" style={{ color: 'var(--success)' }}>-${amountUsd} USDC</span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs" style={{ color: 'var(--muted)' }}>{date.toLocaleDateString()}</span>
            {memo && <span className="text-xs truncate max-w-[120px]" style={{ color: 'var(--subtle)' }}>"{memo}"</span>}
          </div>
        </div>
        {isOpen ? <ChevronUp className="size-4 shrink-0" style={{ color: 'var(--muted)' }} /> : <ChevronDown className="size-4 shrink-0" style={{ color: 'var(--muted)' }} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} style={{ overflow: 'hidden' }}>
            <div className="px-4 pb-4 space-y-2 text-xs border-t" style={{ borderColor: 'var(--border)', paddingTop: '12px' }}>
              {corridor && (
                <div className="flex justify-between">
                  <span style={{ color: 'var(--muted)' }}>They received (approx)</span>
                  <span className="font-semibold" style={{ color: 'var(--ink)' }}>{corridor.symbol}{(Number(amountUsd) * corridor.rate * 0.995).toLocaleString()} {corridorCode}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span style={{ color: 'var(--muted)' }}>Recipient</span>
                <span className="mono font-medium" style={{ color: 'var(--ink)' }}>{(recipient).slice(0, 8)}…{(recipient).slice(-6)}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--muted)' }}>Sender</span>
                <span className="mono font-medium" style={{ color: 'var(--ink)' }}>{(sender).slice(0, 8)}…{(sender).slice(-6)}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--muted)' }}>Remittance ID</span>
                <span className="font-medium" style={{ color: 'var(--ink)' }}>#{id.toString()}</span>
              </div>
              <a href={txUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium" style={{ color: 'var(--accent-hover)' }}>
                View on ArcScan <ExternalLink className="size-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ScheduleList({ ids, loading, expandedId, setExpandedId }: { ids: bigint[]; loading: boolean; expandedId: string | null; setExpandedId: (id: string | null) => void }) {
  if (loading) return <LoadingCards />
  if (ids.length === 0) return <EmptyState icon={<Calendar className="size-6" />} title="No schedules yet" body="Your scheduled recurring payments will appear here." />

  return (
    <div className="space-y-2">
      {[...ids].reverse().map(id => (
        <ScheduleRow key={id.toString()} id={id} expandedId={expandedId} setExpandedId={setExpandedId} />
      ))}
    </div>
  )
}

function ScheduleRow({ id, expandedId, setExpandedId }: { id: bigint; expandedId: string | null; setExpandedId: (id: string | null) => void }) {
  const key = `sch-${id.toString()}`
  const isOpen = expandedId === key

  const { data } = useReadContract({
    address: FLOWPAY_ADDRESS,
    abi: FLOWPAY_ABI,
    functionName: 'getSchedule',
    args: [id],
    chainId: TARGET_CHAIN_ID,
  })

  if (!data) return null
  const [_owner, recipient, amount, frequency, label, category, nextExecuteAt, active] = data as [string, string, bigint, number, string, number, bigint, boolean]
  const amountUsd = (Number(amount) / 1e6).toFixed(2)
  const nextDate = new Date(Number(nextExecuteAt) * 1000)

  return (
    <div style={{ ...glass.card, opacity: active ? 1 : 0.6 }} className="overflow-hidden">
      <button onClick={() => setExpandedId(isOpen ? null : key)} className="w-full flex items-center gap-3 p-4 text-left">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl text-xl" style={{ background: 'rgba(18,45,69,0.07)' }}>
          {CAT_EMOJIS[category] ?? '💸'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm truncate" style={{ color: 'var(--ink)' }}>{label || CAT_LABELS[category]}</span>
            <span className="display font-bold text-sm tabular-nums" style={{ color: 'var(--accent)' }}>${amountUsd} USDC</span>
          </div>
          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
            <span className="text-xs px-1.5 py-0.5 rounded-md font-medium" style={{ background: active ? 'rgba(26,128,71,0.1)' : 'rgba(18,45,69,0.06)', color: active ? 'var(--success)' : 'var(--muted)' }}>
              {active ? 'Active' : 'Inactive'}
            </span>
            <span className="text-xs" style={{ color: 'var(--muted)' }}>{FREQ_LABELS[frequency]}</span>
          </div>
        </div>
        {isOpen ? <ChevronUp className="size-4 shrink-0" style={{ color: 'var(--muted)' }} /> : <ChevronDown className="size-4 shrink-0" style={{ color: 'var(--muted)' }} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} style={{ overflow: 'hidden' }}>
            <div className="px-4 pb-4 space-y-2 text-xs border-t" style={{ borderColor: 'var(--border)', paddingTop: '12px' }}>
              <div className="flex justify-between">
                <span style={{ color: 'var(--muted)' }}>Recipient</span>
                <span className="mono font-medium" style={{ color: 'var(--ink)' }}>{(recipient).slice(0, 8)}…{(recipient).slice(-6)}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--muted)' }}>Next due</span>
                <span className="font-medium" style={{ color: 'var(--ink)' }}>{nextDate.toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--muted)' }}>Frequency</span>
                <span className="font-medium" style={{ color: 'var(--ink)' }}>{FREQ_LABELS[frequency]}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--muted)' }}>Category</span>
                <span className="font-medium" style={{ color: 'var(--ink)' }}>{CAT_LABELS[category]}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--muted)' }}>Schedule ID</span>
                <span className="font-medium" style={{ color: 'var(--ink)' }}>#{id.toString()}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function LoadingCards() {
  return (
    <div className="space-y-2">
      {[1, 2, 3].map(i => (
        <div key={i} style={glass.card} className="p-4 flex items-center gap-3 animate-pulse">
          <div className="size-10 rounded-2xl" style={{ background: 'var(--surface-muted)' }} />
          <div className="flex-1 space-y-2">
            <div className="h-3 rounded-full w-32" style={{ background: 'var(--surface-muted)' }} />
            <div className="h-2.5 rounded-full w-20" style={{ background: 'var(--surface-muted)' }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function EmptyState({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div style={glass.card} className="p-8 flex flex-col items-center gap-2 text-center">
      <div className="flex size-12 items-center justify-center rounded-2xl mb-1" style={{ background: 'rgba(18,45,69,0.07)', color: 'var(--accent)' }}>{icon}</div>
      <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{title}</p>
      <p className="text-xs text-pretty" style={{ color: 'var(--muted)' }}>{body}</p>
    </div>
  )
}

// Suppress unused import warning — used in parent context
const _ArrowRight = ArrowRight
void _ArrowRight
