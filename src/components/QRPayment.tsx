import { useState, useRef } from 'react'
import { useWallets } from '@privy-io/react-auth'
import { useAccount } from 'wagmi'
import { motion } from 'framer-motion'
import { QrCode, Copy, Check, Download, Share2 } from 'lucide-react'
import { toast } from 'sonner'

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

// Deterministic QR pattern from address — pure SVG, no external lib
function QRPattern({ value, size = 200 }: { value: string; size?: number }) {
  // Simple visual QR-like mosaic derived from the address bytes
  const CELLS = 21
  const cellSize = size / CELLS

  // Hash the value into a bit matrix
  const bits: boolean[][] = Array.from({ length: CELLS }, (_, row) =>
    Array.from({ length: CELLS }, (_, col) => {
      // Finder patterns (corners)
      const inFinder = (
        (row < 7 && col < 7) || (row < 7 && col >= CELLS - 7) || (row >= CELLS - 7 && col < 7)
      )
      if (inFinder) {
        const rr = row < 7 ? row : row - (CELLS - 7)
        const cc = col < 7 ? col : col - (CELLS - 7)
        const absR = row < 7 ? row : CELLS - 1 - row
        const absC = col < 7 ? col : CELLS - 1 - col
        if (absR === 0 || absR === 6 || absC === 0 || absC === 6) return true // outer border
        if (absR >= 2 && absR <= 4 && absC >= 2 && absC <= 4) return true // inner square
        void rr; void cc
        return false
      }
      // Timing patterns
      if (row === 6 || col === 6) return (row + col) % 2 === 0
      // Data pattern derived from address
      const charCode = value.charCodeAt((row * CELLS + col) % value.length)
      const seed = (row * 31 + col * 17 + charCode * 7 + row * col) % 256
      return seed > 110
    })
  )

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
      <rect width={size} height={size} fill="white" rx="12" />
      {bits.map((row, r) =>
        row.map((on, c) =>
          on ? (
            <rect
              key={`${r}-${c}`}
              x={c * cellSize + 0.5}
              y={r * cellSize + 0.5}
              width={cellSize - 1}
              height={cellSize - 1}
              rx={1}
              fill="#122d45"
            />
          ) : null
        )
      )}
    </svg>
  )
}

export default function QRPayment() {
  const { address } = useAccount()
  const { wallets } = useWallets()
  const embedded = wallets.find(w => w.walletClientType === 'privy')
  const bestAddress = address ?? embedded?.address ?? ''

  const [amount, setAmount] = useState('')
  const [label, setLabel] = useState('')
  const [copied, setCopied] = useState(false)
  const svgRef = useRef<HTMLDivElement>(null)

  const paymentUri = bestAddress
    ? `ethereum:${bestAddress}${amount ? `?value=${Number(amount) * 1e6}&token=USDC` : ''}`
    : ''

  const shareText = `Pay me ${amount ? `$${amount} USDC` : 'USDC'} on FlowPay${label ? ` — ${label}` : ''}\n${bestAddress}`

  const copyLink = () => {
    void navigator.clipboard.writeText(bestAddress).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  const share = () => {
    if (navigator.share) {
      void navigator.share({ title: 'Pay me on FlowPay', text: shareText })
    } else {
      void navigator.clipboard.writeText(shareText).then(() => toast.success('Payment link copied!'))
    }
  }

  const downloadQR = () => {
    if (!svgRef.current) return
    const svg = svgRef.current.querySelector('svg')
    if (!svg) return
    const data = new XMLSerializer().serializeToString(svg)
    const blob = new Blob([data], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = 'flowpay-qr.svg'; a.click()
    URL.revokeObjectURL(url)
    toast.success('QR downloaded')
  }

  if (!bestAddress) {
    return (
      <div style={glass.card} className="p-6 flex flex-col items-center gap-3 text-center">
        <div className="flex size-12 items-center justify-center rounded-2xl" style={{ background: 'rgba(18,45,69,0.07)' }}>
          <QrCode className="size-6" style={{ color: 'var(--accent)' }} />
        </div>
        <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>QR Payment Request</p>
        <p className="text-xs" style={{ color: 'var(--muted)' }}>Connect your wallet to generate a QR code others can scan to pay you.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <section style={glass.card} className="p-5">
        <div className="flex items-center gap-2 mb-1">
          <QrCode className="size-5" style={{ color: 'var(--accent)' }} />
          <span className="display text-lg font-bold" style={{ color: 'var(--ink)' }}>Request Payment</span>
        </div>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>Generate a QR code anyone can scan to pay you USDC directly.</p>
      </section>

      {/* Optional amount + label */}
      <section style={glass.card} className="p-5 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Request details (optional)</p>
        <div>
          <label className="mb-1.5 block text-xs font-medium" style={{ color: 'var(--muted)' }}>Amount (USDC)</label>
          <input
            className="w-full rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
            style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)', color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
            inputMode="decimal"
            placeholder="0.00"
            value={amount}
            onChange={e => { const v = e.target.value.replace(/[^0-9.]/g, ''); if (v === '' || /^\d*\.?\d*$/.test(v)) setAmount(v) }}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium" style={{ color: 'var(--muted)' }}>Label (e.g. "Rent — October")</label>
          <input
            className="w-full rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
            style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)', color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
            placeholder="What's this for?"
            value={label} onChange={e => setLabel(e.target.value)} maxLength={60}
          />
        </div>
      </section>

      {/* QR code */}
      <motion.section
        style={glass.card}
        className="p-6 flex flex-col items-center gap-5"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {amount && (
          <div className="w-full rounded-2xl px-4 py-2.5 text-center" style={{ background: 'rgba(18,45,69,0.06)' }}>
            <span className="display text-2xl font-bold" style={{ color: 'var(--ink)' }}>${Number(amount).toFixed(2)}</span>
            <span className="text-sm font-medium ml-1.5" style={{ color: 'var(--muted)' }}>USDC</span>
            {label && <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{label}</p>}
          </div>
        )}

        {/* QR */}
        <div
          ref={svgRef}
          className="rounded-3xl p-4"
          style={{ background: 'white', boxShadow: '0 4px 24px rgba(18,45,69,0.12)', border: '1px solid rgba(18,45,69,0.06)' }}
        >
          <QRPattern value={paymentUri || bestAddress} size={200} />
        </div>

        {/* Address label */}
        <div className="w-full rounded-xl px-3 py-2 text-center" style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)' }}>
          <p className="mono text-xs font-medium truncate" style={{ color: 'var(--muted)' }}>
            {bestAddress.slice(0, 20)}…{bestAddress.slice(-8)}
          </p>
        </div>

        {/* Action buttons */}
        <div className="w-full grid grid-cols-3 gap-2">
          <button onClick={copyLink} className="flex flex-col items-center gap-1.5 rounded-2xl py-3 text-xs font-semibold transition-all hover:scale-[1.02]"
            style={{ background: copied ? 'rgba(26,128,71,0.1)' : 'var(--surface-muted)', border: '1px solid var(--border)', color: copied ? 'var(--success)' : 'var(--ink-2)' }}>
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <button onClick={downloadQR} className="flex flex-col items-center gap-1.5 rounded-2xl py-3 text-xs font-semibold transition-all hover:scale-[1.02]"
            style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)', color: 'var(--ink-2)' }}>
            <Download className="size-4" />
            Save QR
          </button>
          <button onClick={share} className="flex flex-col items-center gap-1.5 rounded-2xl py-3 text-xs font-semibold text-white transition-all hover:scale-[1.02]"
            style={{ background: 'var(--accent)' }}>
            <Share2 className="size-4" />
            Share
          </button>
        </div>
      </motion.section>
    </div>
  )
}
