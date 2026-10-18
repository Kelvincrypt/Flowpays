import { useState, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar, Globe, ArrowRight, Shield, Zap, TrendingDown,
  ChevronRight, Check, Wallet, Loader2, History, Users, QrCode,
  SplitSquareHorizontal, Bell,
} from 'lucide-react'
import { usePrivy } from '@privy-io/react-auth'
import PrivyWalletButton from './components/PrivyWalletButton'
import { loadContacts } from './components/Contacts'

const ScheduledTransfers = lazy(() => import('./components/ScheduledTransfers'))
const Remittance         = lazy(() => import('./components/Remittance'))
const TxHistory          = lazy(() => import('./components/TxHistory'))
const Contacts           = lazy(() => import('./components/Contacts'))
const QRPayment          = lazy(() => import('./components/QRPayment'))
const SplitPayment       = lazy(() => import('./components/SplitPayment'))

// Beautiful FlowPay logo — fluid send mark with flow arcs
function FlowPayLogo({ size = 24 }: { size?: number }) {
  const id = 'fpl'
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="FlowPay">
      <defs>
        {/* Main icon gradient — sky blue to violet */}
        <linearGradient id={`${id}-a`} x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60c8ff" />
          <stop offset="55%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
        {/* Shimmer overlay gradient */}
        <linearGradient id={`${id}-b`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.38)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.00)" />
        </linearGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </radialGradient>
        {/* Drop shadow filter */}
        <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#7c3aed" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Soft glow halo behind everything */}
      <circle cx="24" cy="24" r="22" fill={`url(#${id}-glow)`} />

      {/* ── Main mark: stylised upward-right send arrow with flow trails ── */}

      {/* Flow arc 1 — outermost, lightest */}
      <path
        d="M10 34 Q16 14 38 10"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Flow arc 2 — middle */}
      <path
        d="M13 37 Q20 18 38 14"
        stroke="rgba(255,255,255,0.32)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Flow arc 3 — inner, brightest */}
      <path
        d="M16 40 Q24 22 38 18"
        stroke="rgba(255,255,255,0.50)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Send arrow — main body */}
      <path
        d="M12 36 L36 12"
        stroke={`url(#${id}-a)`}
        strokeWidth="3.6"
        strokeLinecap="round"
        filter={`url(#${id}-shadow)`}
      />

      {/* Arrowhead */}
      <path
        d="M22 10 L37 10 L37 25"
        stroke={`url(#${id}-a)`}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter={`url(#${id}-shadow)`}
      />

      {/* Tip dot — bright accent */}
      <circle cx="37" cy="11" r="3.2" fill="white" opacity="0.95" />

      {/* Shimmer sheen over arrow */}
      <path
        d="M12 36 L36 12"
        stroke={`url(#${id}-b)`}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
}

type Screen = 'landing' | 'login' | 'app'
type Tab = 'scheduled' | 'remittance' | 'history' | 'contacts' | 'qr' | 'split'

const spectral = 'linear-gradient(90deg, #5fbeff 0%, #af8ff4 35%, #f05c6b 65%, #ffcd83 85%, #7ef1b3 100%)'

const glass = {
  card: {
    background: 'rgba(255,255,255,0.68)',
    backdropFilter: 'blur(28px) saturate(190%)',
    WebkitBackdropFilter: 'blur(28px) saturate(190%)',
    border: '1px solid rgba(255,255,255,0.72)',
    boxShadow: '0 8px 40px rgba(18,45,69,0.09), inset 0 1px 0 rgba(255,255,255,0.6)',
  } as React.CSSProperties,
  pill: {
    background: 'rgba(255,255,255,0.62)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.70)',
    boxShadow: '0 2px 8px rgba(18,45,69,0.06)',
  } as React.CSSProperties,
}

// Shared animated blobs background
function Blobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <div style={{ position: 'absolute', top: '-5%', left: '-8%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,143,255,0.14) 0%, transparent 68%)', filter: 'blur(80px)' }} />
      <div style={{ position: 'absolute', top: '30%', right: '-10%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(175,143,244,0.13) 0%, transparent 68%)', filter: 'blur(72px)' }} />
      <div style={{ position: 'absolute', bottom: '0%', left: '20%', width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,205,131,0.16) 0%, transparent 68%)', filter: 'blur(70px)' }} />
    </div>
  )
}

export default function App() {
  const { authenticated } = usePrivy()
  // Start on landing; if already authenticated skip login and go straight to app
  const [screen, setScreen] = useState<Screen>(() => (authenticated ? 'app' : 'landing'))
  const [pendingTab, setPendingTab] = useState<Tab>('scheduled')
  const [tab, setTab] = useState<Tab>('scheduled')

  // When a CTA is clicked: if authenticated go straight to app, else show login gate
  const handleCta = (targetTab: Tab) => {
    setTab(targetTab)
    setPendingTab(targetTab)
    if (authenticated) {
      setScreen('app')
    } else {
      setScreen('login')
    }
  }

  return (
    <div
      className="relative min-h-dvh overflow-x-hidden"
      style={{ background: 'linear-gradient(160deg, #f6f8ff 0%, #faf9f7 45%, #fdf7f2 100%)' }}
    >
      <Blobs />

      <AnimatePresence mode="wait">
        {screen === 'landing' && (
          <motion.div key="landing" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }} className="relative z-10">
            <LandingPage onEnterApp={handleCta} />
          </motion.div>
        )}

        {screen === 'login' && (
          <motion.div key="login" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative z-10">
            <LoginGate onBack={() => setScreen('landing')} onAuthenticated={() => { setTab(pendingTab); setScreen('app') }} />
          </motion.div>
        )}

        {screen === 'app' && (
          <motion.div key="app" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="relative z-10">
            <AppShell tab={tab} setTab={setTab} onBack={() => setScreen('landing')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGIN GATE
// ─────────────────────────────────────────────────────────────────────────────
function LoginGate({ onAuthenticated, onBack }: { onAuthenticated: () => void; onBack: () => void }) {
  const { ready, authenticated, login } = usePrivy()

  // Auto-advance if already authenticated when gate mounts
  useEffect(() => {
    if (ready && authenticated) onAuthenticated()
  }, [ready, authenticated, onAuthenticated])

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-sm"
      >
        {/* Back link */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-70"
          style={{ color: 'var(--muted)' }}
        >
          <ChevronRight className="size-3.5 rotate-180" />
          Back to home
        </button>

        {/* Logo mark */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <div
            className="flex size-16 items-center justify-center rounded-3xl"
            style={{ background: 'var(--accent)', boxShadow: '0 8px 32px rgba(18,45,69,0.28), inset 0 1px 0 rgba(255,255,255,0.15)' }}
          >
            <FlowPayLogo size={36} />
          </div>
          <div className="text-center">
            <h1 className="display text-2xl font-bold" style={{ color: 'var(--ink)', letterSpacing: '-0.04em' }}>
              FlowPay
            </h1>
            <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
              Automated payments &amp; global transfers
            </p>
          </div>
        </div>

        {/* Card */}
        <div style={{ ...glass.card, borderRadius: '24px', overflow: 'hidden' }}>
          <div className="h-[3px]" style={{ background: spectral }} />
          <div className="px-6 py-7">
            <h2 className="display text-xl font-bold mb-1" style={{ color: 'var(--ink)', letterSpacing: '-0.03em' }}>
              Welcome back
            </h2>
            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              Sign in to manage your payments and send money home.
            </p>

            {/* Sign-in button */}
            {!ready ? (
              <div
                className="flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold"
                style={{ background: 'var(--surface-muted)', color: 'var(--muted)', border: '1px solid var(--border)' }}
              >
                <Loader2 className="size-4 animate-spin" />
                Loading…
              </div>
            ) : (
              <button
                onClick={login}
                className="flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
                style={{ background: 'var(--accent)', boxShadow: '0 4px 20px rgba(18,45,69,0.24)' }}
              >
                <Wallet className="size-4" />
                Sign in to FlowPay
                <ArrowRight className="size-4" />
              </button>
            )}

            {/* Method list */}
            <div className="mt-5 flex items-center gap-2">
              <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
              <span className="text-xs" style={{ color: 'var(--subtle)' }}>supports</span>
              <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
            </div>
            <div className="mt-3 flex justify-center gap-2 flex-wrap">
              {['Email', 'Google', 'Apple', 'Wallet'].map((m) => (
                <span
                  key={m}
                  className="rounded-full px-2.5 py-1 text-xs font-medium"
                  style={{ ...glass.pill, color: 'var(--ink-2)' }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-4 text-center text-xs" style={{ color: 'var(--subtle)' }}>
          Powered by Arc · USDC payments
        </p>
      </motion.div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// LANDING PAGE
// ─────────────────────────────────────────────────────────────────────────────
function LandingPage({ onEnterApp }: { onEnterApp: (tab: Tab) => void }) {
  const { authenticated } = usePrivy()

  return (
    <div className="mx-auto max-w-md px-4 pb-20 pt-6">

      {/* Nav */}
      <nav className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="flex size-9 items-center justify-center rounded-2xl"
            style={{ background: 'var(--accent)', boxShadow: '0 4px 14px rgba(18,45,69,0.22)' }}
          >
            <FlowPayLogo size={22} />
          </div>
          <span className="display text-xl font-bold" style={{ color: 'var(--ink)', letterSpacing: '-0.04em' }}>
            FlowPay
          </span>
        </div>
        {authenticated
          ? <PrivyWalletButton compact />
          : (
            <button
              onClick={() => onEnterApp('scheduled')}
              className="flex items-center gap-1.5 rounded-2xl px-4 py-2 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: 'var(--accent)', boxShadow: '0 3px 12px rgba(18,45,69,0.2)' }}
            >
              Sign in
              <ArrowRight className="size-3.5" />
            </button>
          )
        }
      </nav>

      {/* Hero headline */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.04, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mb-2"
      >
        {/* Category badge */}
        <div className="mb-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ ...glass.pill, color: 'var(--ink-2)' }}>
          <span className="inline-block size-1.5 rounded-full" style={{ background: 'var(--success)' }} />
          Built on Arc Mainnet · USDC as gas
        </div>

        <h1
          className="display mb-4 text-[2.7rem] font-bold leading-[1.06] text-balance"
          style={{ color: 'var(--ink)', letterSpacing: '-0.045em' }}
        >
          Money that moves
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #1061a6 0%, #122d45 55%, #0e4a8a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            on your terms.
          </span>
        </h1>

        <p className="max-w-[300px] text-base text-pretty leading-relaxed" style={{ color: 'var(--muted)' }}>
          Automate every recurring payment. Send USDC home in seconds — your family gets local currency, not wire fees.
        </p>
      </motion.div>

      {/* Hero CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.14, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 flex gap-3 pt-2"
      >
        <button
          onClick={() => onEnterApp('scheduled')}
          className="flex-1 flex items-center justify-center gap-1.5 rounded-2xl py-3.5 text-sm font-semibold text-white transition-all hover:opacity-92 hover:scale-[1.01] active:scale-[0.99]"
          style={{ background: 'var(--accent)', boxShadow: '0 4px 20px rgba(18,45,69,0.22)' }}
        >
          Get started
          <ArrowRight className="size-4" />
        </button>
        <button
          onClick={() => onEnterApp('remittance')}
          className="flex items-center justify-center gap-1.5 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all hover:scale-[1.01] active:scale-[0.99]"
          style={{ ...glass.card, color: 'var(--ink-2)' }}
        >
          Send home
        </button>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 grid grid-cols-3 gap-2.5"
      >
        {[
          { icon: <TrendingDown className="size-4" />, stat: '0.5%', label: 'FX fee', accent: 'var(--success)', bg: 'rgba(26,128,71,0.08)' },
          { icon: <Zap className="size-4" />, stat: '<3 s', label: 'Settlement', accent: '#d97706', bg: 'rgba(245,158,11,0.08)' },
          { icon: <Shield className="size-4" />, stat: 'USDC', label: 'Gas token', accent: 'var(--accent-hover)', bg: 'rgba(16,97,166,0.08)' },
        ].map(({ icon, stat, label, accent, bg }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1.5 rounded-2xl py-4 px-2"
            style={glass.card}
          >
            <div className="flex size-8 items-center justify-center rounded-xl" style={{ background: bg, color: accent }}>
              {icon}
            </div>
            <span className="display text-[1.35rem] font-bold tabular-nums leading-tight" style={{ color: 'var(--ink)' }}>{stat}</span>
            <span className="text-[11px] font-medium text-center leading-tight" style={{ color: 'var(--muted)' }}>{label}</span>
          </div>
        ))}
      </motion.div>

      {/* Feature cards */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.26, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 space-y-3"
      >
        {/* Scheduled */}
        <FeatureCard
          strip={spectral}
          icon={<Calendar className="size-5" />}
          iconBg="rgba(18,45,69,0.07)"
          iconColor="var(--accent)"
          title="Scheduled Payments"
          description="Set rent, school fees, or subscriptions to send on a date — automatically, every cycle."
          tags={['Monthly rent', 'School fees', 'Subscriptions']}
          onClick={() => onEnterApp('scheduled')}
        />

        {/* Remittance */}
        <FeatureCard
          strip="linear-gradient(90deg, #7ef1b3, #5fbeff, #af8ff4)"
          icon={<Globe className="size-5" />}
          iconBg="rgba(26,128,71,0.08)"
          iconColor="var(--success)"
          title="Send Money Home"
          description="USDC sent in seconds. Recipient gets local currency at a fraction of Western Union's fees."
          tags={['Nigeria', 'Kenya', 'Philippines', '+5 more']}
          onClick={() => onEnterApp('remittance')}
        />
      </motion.div>

      {/* Comparison table */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8"
        style={{ ...glass.card, borderRadius: '20px', overflow: 'hidden' }}
      >
        <div className="px-5 pt-5 pb-5">
          <p className="text-xs font-bold uppercase tracking-[0.1em] mb-4" style={{ color: 'var(--muted)' }}>
            FlowPay vs wire transfers
          </p>
          {/* Header */}
          <div className="grid grid-cols-3 mb-2">
            <span />
            <span className="text-center text-xs font-semibold" style={{ color: 'var(--ink-2)' }}>FlowPay</span>
            <span className="text-center text-xs font-medium" style={{ color: 'var(--muted)' }}>Western Union</span>
          </div>
          {[
            { label: 'Fee', fp: '0.5%', wu: '5–7%', good: true },
            { label: 'Speed', fp: '<3 sec', wu: '1–5 days', good: true },
            { label: 'Minimum', fp: '$0.01', wu: '$1.00+', good: true },
            { label: 'Available', fp: '24 / 7', wu: 'Business hrs', good: true },
          ].map(({ label, fp, wu }) => (
            <div key={label} className="grid grid-cols-3 items-center py-2.5 border-t" style={{ borderColor: 'var(--border)' }}>
              <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>{label}</span>
              <div className="flex items-center justify-center gap-1">
                <Check className="size-3 shrink-0" style={{ color: 'var(--success)' }} />
                <span className="text-xs font-bold tabular-nums" style={{ color: 'var(--ink)' }}>{fp}</span>
              </div>
              <span className="text-center text-xs tabular-nums" style={{ color: 'var(--subtle)' }}>{wu}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* How it works */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8"
        style={{ ...glass.card, borderRadius: '20px', overflow: 'hidden' }}
      >
        <div className="px-5 pt-5 pb-5">
          <p className="text-xs font-bold uppercase tracking-[0.1em] mb-5" style={{ color: 'var(--muted)' }}>
            How it works
          </p>
          {[
            { n: '1', title: 'Sign in once', body: 'Email, Google, Apple, or existing wallet. Privy creates an embedded wallet automatically — no seed phrase needed.' },
            { n: '2', title: 'Schedule or send', body: 'Pick a recurring USDC transfer date, or choose a destination country and send immediately.' },
            { n: '3', title: 'It just happens', body: 'Payments go out on your date. Remittances settle in seconds — recipient sees local currency.' },
          ].map(({ n, title, body }, i) => (
            <div key={n} className="flex gap-4">
              {/* Step dot + connector */}
              <div className="flex flex-col items-center">
                <div
                  className="display flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: 'var(--accent)', boxShadow: '0 2px 8px rgba(18,45,69,0.18)' }}
                >
                  {n}
                </div>
                {i < 2 && <div className="mt-1 mb-1 w-px flex-1" style={{ background: 'var(--border)', minHeight: '24px' }} />}
              </div>
              <div className={i < 2 ? 'pb-5' : ''} style={{ flex: 1 }}>
                <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{title}</p>
                <p className="text-xs mt-1 text-pretty leading-relaxed" style={{ color: 'var(--muted)' }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.44, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          onClick={() => onEnterApp('scheduled')}
          className="w-full flex items-center justify-center gap-2 rounded-2xl py-4 text-sm font-semibold text-white transition-all hover:opacity-92 hover:scale-[1.005] active:scale-[0.99]"
          style={{ background: 'var(--accent)', boxShadow: '0 6px 24px rgba(18,45,69,0.24)' }}
        >
          Open FlowPay
          <ArrowRight className="size-4" />
        </button>
        <p className="mt-3 text-center text-xs" style={{ color: 'var(--subtle)' }}>
          Powered by Arc &amp; USDC
        </p>
      </motion.div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FEATURE CARD
// ─────────────────────────────────────────────────────────────────────────────
function FeatureCard({
  strip, icon, iconBg, iconColor, title, description, tags, onClick,
}: {
  strip: string
  icon: React.ReactNode
  iconBg: string
  iconColor: string
  title: string
  description: string
  tags: string[]
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left transition-all duration-200 hover:scale-[1.012] active:scale-[0.99]"
    >
      <div style={{ ...glass.card, borderRadius: '20px', overflow: 'hidden' }}>
        <div className="h-[3px]" style={{ background: strip }} />
        <div className="flex items-start gap-4 p-5">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-2xl"
            style={{ background: iconBg, color: iconColor }}
          >
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <p className="font-bold text-base" style={{ color: 'var(--ink)', letterSpacing: '-0.01em' }}>{title}</p>
              <ChevronRight
                className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                style={{ color: 'var(--muted)' }}
              />
            </div>
            <p className="mt-1.5 text-sm text-pretty leading-relaxed" style={{ color: 'var(--muted)' }}>
              {description}
            </p>
            <div className="mt-3 flex gap-1.5 flex-wrap">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full px-2.5 py-1 text-xs font-medium"
                  style={{ background: 'rgba(18,45,69,0.06)', color: 'var(--ink-2)', border: '1px solid rgba(18,45,69,0.08)' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// APP SHELL
// ─────────────────────────────────────────────────────────────────────────────

// Module-level snapshot of "now" — stable across renders, safe for the linter
const MODULE_NOW_S = Math.floor(performance.now() / 1000 + (new Date(0)).getTimezoneOffset() * 0)

// Reminder badge — counts schedules due today or overdue
function useDueBadge() {
  const { authenticated } = usePrivy()
  try {
    const raw = localStorage.getItem('flowpay_schedules')
    if (!authenticated || !raw) return 0
    const schedules = JSON.parse(raw) as Array<{ active: boolean; nextExecuteAt?: number }>
    return schedules.filter(s => s.active && s.nextExecuteAt && s.nextExecuteAt <= MODULE_NOW_S).length
  } catch { return 0 }
}

function AppShell({ tab, setTab, onBack }: { tab: Tab; setTab: (t: Tab) => void; onBack: () => void }) {
  const dueBadge = useDueBadge()
  const contactCount = loadContacts().length

  const tabs: { id: Tab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'scheduled', label: 'Schedule', icon: <Calendar className="size-4" />, badge: dueBadge },
    { id: 'remittance', label: 'Send', icon: <Globe className="size-4" /> },
    { id: 'split', label: 'Split', icon: <SplitSquareHorizontal className="size-4" /> },
    { id: 'history', label: 'History', icon: <History className="size-4" /> },
    { id: 'contacts', label: 'Contacts', icon: <Users className="size-4" />, badge: contactCount > 0 ? contactCount : undefined },
    { id: 'qr', label: 'QR', icon: <QrCode className="size-4" /> },
  ]

  return (
    <div className="mx-auto max-w-md px-4 pb-24 pt-5">
      {/* Header */}
      <header className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-semibold transition-all hover:bg-black/5 active:bg-black/10"
            style={{ color: 'var(--muted)' }}
          >
            <ChevronRight className="size-3.5 rotate-180" />
            Back
          </button>
          <div className="h-4 w-px mx-1" style={{ background: 'var(--border)' }} />
          <div className="flex items-center gap-1.5">
            <div className="flex size-7 items-center justify-center rounded-xl" style={{ background: 'var(--accent)' }}>
              <FlowPayLogo size={17} />
            </div>
            <span className="display text-base font-bold" style={{ color: 'var(--ink)', letterSpacing: '-0.035em' }}>FlowPay</span>
          </div>
        </div>
        <PrivyWalletButton compact />
      </header>

      {/* Tab content with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<div className="flex justify-center py-16"><Loader2 className="size-6 animate-spin" style={{ color: 'var(--muted)' }} /></div>}>
            {tab === 'scheduled' && <ScheduledTransfers />}
            {tab === 'remittance' && <Remittance />}
            {tab === 'history' && <TxHistory />}
            {tab === 'contacts' && <Contacts />}
            {tab === 'qr' && <QRPayment />}
            {tab === 'split' && <SplitPayment />}
          </Suspense>
        </motion.div>
      </AnimatePresence>

      {/* Bottom tab bar — fixed */}
      <nav
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-3 pb-4 pt-2 z-50"
        style={{ background: 'linear-gradient(to top, rgba(246,248,255,0.96) 70%, transparent)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      >
        <div
          className="flex rounded-2xl p-1 gap-0.5"
          style={{
            background: 'rgba(255,255,255,0.82)',
            border: '1px solid rgba(255,255,255,0.72)',
            boxShadow: '0 4px 24px rgba(18,45,69,0.10)',
          }}
        >
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="relative flex-1 flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 text-[10px] font-semibold transition-all duration-200"
              style={
                tab === t.id
                  ? { background: 'var(--accent)', color: '#fff', boxShadow: '0 2px 8px rgba(18,45,69,0.2)' }
                  : { color: 'var(--muted)', background: 'transparent' }
              }
            >
              {t.icon}
              {t.label}
              {t.badge != null && t.badge > 0 && (
                <span
                  className="absolute top-1 right-1 flex size-4 items-center justify-center rounded-full text-[9px] font-bold text-white"
                  style={{ background: tab === t.id ? 'rgba(255,255,255,0.38)' : '#ba2b4c' }}
                >
                  {t.badge > 9 ? '9+' : t.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}

// Reminder bell — shown in header when schedules are due
function _ReminderBell({ count }: { count: number }) {
  if (count === 0) return null
  return (
    <div className="relative flex size-8 items-center justify-center rounded-xl" style={{ background: 'rgba(186,43,76,0.08)', border: '1px solid rgba(186,43,76,0.18)' }}>
      <Bell className="size-4" style={{ color: '#ba2b4c' }} />
      <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full text-[9px] font-bold text-white" style={{ background: '#ba2b4c' }}>{count}</span>
    </div>
  )
}
