import { usePrivy, useWallets } from '@privy-io/react-auth'
import { useAccount } from 'wagmi'
import { Loader2, LogOut, Wallet } from 'lucide-react'

interface Props {
  /** compact mode: shows shortened address only, no badge */
  compact?: boolean
}

export default function PrivyWalletButton({ compact = false }: Props) {
  const { ready, authenticated, login, logout } = usePrivy()
  const { wallets } = useWallets()
  const { address } = useAccount()

  if (!ready) {
    return (
      <div
        className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold"
        style={{ background: 'var(--surface-muted)', color: 'var(--muted)', border: '1px solid var(--border)' }}
      >
        <Loader2 className="size-3 animate-spin" />
        {!compact && 'Loading…'}
      </div>
    )
  }

  if (!authenticated) {
    return (
      <button
        onClick={login}
        className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97]"
        style={{ background: 'var(--accent)', boxShadow: '0 1px 8px rgba(18,45,69,0.18)' }}
      >
        <Wallet className="size-3.5" />
        Sign In
      </button>
    )
  }

  const displayAddress = address
    ? address.slice(0, 6) + '…' + address.slice(-4)
    : wallets[0]?.address
      ? wallets[0].address.slice(0, 6) + '…' + wallets[0].address.slice(-4)
      : '—'

  const isEmbedded = wallets.some((w) => w.walletClientType === 'privy')

  if (compact) {
    return (
      <div className="flex items-center gap-1.5">
        <div
          className="flex items-center gap-1.5 rounded-xl px-2.5 py-1.5"
          style={{
            background: 'rgba(255,255,255,0.72)',
            border: '1px solid rgba(255,255,255,0.68)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <div className="size-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--success)' }} />
          <span className="mono text-xs font-medium" style={{ color: 'var(--ink)' }}>{displayAddress}</span>
        </div>
        <button
          onClick={() => void logout()}
          className="flex size-7 items-center justify-center rounded-xl transition-all hover:bg-red-50 active:scale-[0.96]"
          style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.5)' }}
          title="Sign out"
          aria-label="Sign out"
        >
          <LogOut className="size-3" style={{ color: 'var(--muted)' }} />
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center gap-2 rounded-xl px-3 py-2"
        style={{
          background: 'rgba(255,255,255,0.72)',
          border: '1px solid rgba(255,255,255,0.68)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 2px 12px rgba(18,45,69,0.06)',
        }}
      >
        <div className="size-2 rounded-full flex-shrink-0" style={{ background: 'var(--success)' }} />
        <span className="mono text-xs font-medium" style={{ color: 'var(--ink)' }}>{displayAddress}</span>
        <span
          className="rounded-md px-1.5 py-0.5 text-[10px] font-semibold"
          style={{ background: isEmbedded ? 'rgba(16,97,166,0.1)' : 'rgba(26,128,71,0.1)', color: isEmbedded ? 'var(--accent-hover)' : 'var(--success)' }}
        >
          {isEmbedded ? 'Embedded' : 'External'}
        </span>
      </div>
      <button
        onClick={() => void logout()}
        className="flex size-8 items-center justify-center rounded-xl transition-all hover:bg-red-50 active:scale-[0.96]"
        style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.5)' }}
        title="Sign out"
        aria-label="Sign out"
      >
        <LogOut className="size-3.5" style={{ color: 'var(--muted)' }} />
      </button>
    </div>
  )
}
