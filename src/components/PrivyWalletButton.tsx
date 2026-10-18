import { useState } from 'react'
import { usePrivy, useWallets } from '@privy-io/react-auth'
import { Loader2, LogOut, Wallet, Copy, Check, Mail } from 'lucide-react'

interface Props {
  compact?: boolean
}

export default function PrivyWalletButton({ compact = false }: Props) {
  const { ready, authenticated, user, login, logout } = usePrivy()
  const { wallets } = useWallets()
  const [copied, setCopied] = useState(false)

  // Derive address during render — prefer embedded (email/social) wallet
  const embedded = wallets.find(w => w.walletClientType === 'privy')
  const best = embedded ?? wallets[0]
  const displayAddr = (authenticated && best?.address) ? best.address : ''

  const copyAddress = () => {
    if (!displayAddr) return
    void navigator.clipboard.writeText(displayAddr).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  const shortAddr = displayAddr
    ? displayAddr.slice(0, 6) + '…' + displayAddr.slice(-4)
    : null

  // User's linked email
  const email = user?.email?.address ?? user?.linkedAccounts?.find(a => a.type === 'email')?.address ?? null

  if (!ready) {
    return (
      <div className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold"
        style={{ background: 'var(--surface-muted)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
        <Loader2 className="size-3 animate-spin" />
        {!compact && 'Loading…'}
      </div>
    )
  }

  if (!authenticated) {
    return (
      <button onClick={login}
        className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97]"
        style={{ background: 'var(--accent)', boxShadow: '0 1px 8px rgba(18,45,69,0.18)' }}>
        <Wallet className="size-3.5" />
        Sign In
      </button>
    )
  }

  if (compact) {
    return (
      <div className="flex items-center gap-1.5">
        <button onClick={copyAddress}
          title={copied ? 'Copied!' : displayAddr ? `Copy: ${displayAddr}` : 'No wallet yet'}
          className="group flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 transition-all hover:scale-[1.02] active:scale-[0.97]"
          style={{
            background: 'rgba(255,255,255,0.72)',
            border: `1px solid ${copied ? 'rgba(23,122,68,0.4)' : 'rgba(255,255,255,0.68)'}`,
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            boxShadow: copied ? '0 0 0 2px rgba(23,122,68,0.12)' : 'none',
            transition: 'all 0.18s ease',
          }}>
          <div className="size-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--success)' }} />
          {shortAddr ? (
            <span className="mono text-xs font-medium" style={{ color: 'var(--ink)' }}>{shortAddr}</span>
          ) : email ? (
            <span className="flex items-center gap-1 text-xs font-medium" style={{ color: 'var(--ink)' }}>
              <Mail className="size-3" />{email.length > 18 ? email.slice(0, 15) + '…' : email}
            </span>
          ) : (
            <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>Setting up…</span>
          )}
          <span className="transition-all duration-150" style={{ color: copied ? 'var(--success)' : 'var(--subtle)' }}>
            {copied
              ? <Check className="size-3" />
              : <Copy className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
          </span>
        </button>

        <button onClick={() => void logout()}
          className="flex size-7 items-center justify-center rounded-xl transition-all hover:bg-red-50 active:scale-[0.96]"
          style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.5)' }}
          title="Sign out" aria-label="Sign out">
          <LogOut className="size-3" style={{ color: 'var(--muted)' }} />
        </button>
      </div>
    )
  }

  // Full card
  const isEmbedded = wallets.some(w => w.walletClientType === 'privy')

  return (
    <div className="flex flex-col gap-2">
      {/* Email row */}
      {email && (
        <div className="flex items-center gap-1.5 rounded-xl px-3 py-1.5"
          style={{ background: 'rgba(16,97,166,0.07)', border: '1px solid rgba(16,97,166,0.18)' }}>
          <Mail className="size-3 shrink-0" style={{ color: 'var(--accent-hover)' }} />
          <span className="text-xs font-medium truncate" style={{ color: 'var(--ink-2)' }}>{email}</span>
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Address card */}
        <button onClick={copyAddress}
          title={copied ? 'Copied!' : displayAddr ? `Copy: ${displayAddr}` : 'Wallet initializing…'}
          className="group flex items-center gap-2 rounded-xl px-3 py-2 transition-all hover:scale-[1.015] active:scale-[0.98]"
          style={{
            background: 'rgba(255,255,255,0.72)',
            border: `1px solid ${copied ? 'rgba(23,122,68,0.38)' : 'rgba(255,255,255,0.68)'}`,
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            boxShadow: copied ? '0 2px 12px rgba(18,45,69,0.06), 0 0 0 2.5px rgba(23,122,68,0.14)' : '0 2px 12px rgba(18,45,69,0.06)',
            transition: 'all 0.18s ease',
          }}>
          <div className="size-2 rounded-full flex-shrink-0" style={{ background: displayAddr ? 'var(--success)' : 'var(--muted)' }} />
          {shortAddr ? (
            <span className="mono text-xs font-medium" style={{ color: 'var(--ink)' }}>{shortAddr}</span>
          ) : (
            <span className="text-xs font-medium flex items-center gap-1" style={{ color: 'var(--muted)' }}>
              <Loader2 className="size-3 animate-spin" /> Initializing wallet…
            </span>
          )}
          <span className="rounded-md px-1.5 py-0.5 text-[10px] font-semibold"
            style={{
              background: isEmbedded ? 'rgba(16,97,166,0.1)' : 'rgba(26,128,71,0.1)',
              color: isEmbedded ? 'var(--accent-hover)' : 'var(--success)',
            }}>
            {isEmbedded ? 'Embedded' : 'External'}
          </span>
          <span className="ml-0.5 transition-all duration-150" style={{ color: copied ? 'var(--success)' : 'var(--subtle)' }}>
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />}
          </span>
        </button>

        <button onClick={() => void logout()}
          className="flex size-8 items-center justify-center rounded-xl transition-all hover:bg-red-50 active:scale-[0.96]"
          style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.5)' }}
          title="Sign out" aria-label="Sign out">
          <LogOut className="size-3.5" style={{ color: 'var(--muted)' }} />
        </button>
      </div>
    </div>
  )
}
