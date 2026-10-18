import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle, ArrowRight, CheckCircle2, X } from 'lucide-react'

interface ConfirmModalProps {
  open: boolean
  onConfirm: () => void
  onCancel: () => void
  title: string
  description?: string
  rows: { label: string; value: string; highlight?: boolean }[]
  confirmLabel?: string
  warning?: string
}

const spectral = 'linear-gradient(90deg,#7c6bff 0%,#5b8fff 35%,#38c7b0 65%,#f5c84a 100%)'

export default function ConfirmModal({
  open, onConfirm, onCancel, title, description, rows, confirmLabel = 'Confirm & Send', warning,
}: ConfirmModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onCancel}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <motion.section
            className="relative w-full max-w-sm mx-4 overflow-hidden rounded-3xl"
            style={{
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(40px) saturate(200%)',
              WebkitBackdropFilter: 'blur(40px) saturate(200%)',
              boxShadow: '0 24px 80px rgba(18,45,69,0.22)',
            }}
            initial={{ scale: 0.92, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 40 }}
            transition={{ type: 'spring', stiffness: 420, damping: 36 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Spectral top strip */}
            <div className="h-1 w-full" style={{ background: spectral }} />

            <div className="p-5">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="display text-lg font-bold" style={{ color: 'var(--ink)' }}>{title}</h2>
                  {description && (
                    <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{description}</p>
                  )}
                </div>
                <button onClick={onCancel}
                  className="flex size-7 items-center justify-center rounded-xl transition-all hover:bg-slate-100"
                  style={{ border: '1px solid var(--border)' }}>
                  <X className="size-3.5" style={{ color: 'var(--muted)' }} />
                </button>
              </div>

              {/* Details rows */}
              <div className="rounded-2xl overflow-hidden mb-4"
                style={{ border: '1px solid var(--border)', background: 'var(--surface-muted)' }}>
                {rows.map((row, i) => (
                  <div key={row.label}
                    className="flex items-center justify-between px-4 py-3"
                    style={i < rows.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}}>
                    <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>{row.label}</span>
                    <span
                      className="text-sm font-semibold mono truncate max-w-[60%] text-right"
                      style={{ color: row.highlight ? 'var(--success)' : 'var(--ink)' }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Warning */}
              {warning && (
                <div className="flex items-start gap-2 rounded-xl px-3 py-2.5 mb-4"
                  style={{ background: 'rgba(245,200,74,0.12)', border: '1px solid rgba(245,200,74,0.4)' }}>
                  <AlertCircle className="size-4 shrink-0 mt-0.5" style={{ color: '#b45309' }} />
                  <p className="text-xs" style={{ color: '#92400e' }}>{warning}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                <button onClick={onCancel}
                  className="flex-1 rounded-2xl py-3 text-sm font-semibold transition-all hover:scale-[1.01] active:scale-[0.99]"
                  style={{ background: 'var(--surface-muted)', color: 'var(--ink-2)', border: '1px solid var(--border)' }}>
                  Cancel
                </button>
                <button onClick={onConfirm}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-2xl py-3 text-sm font-semibold text-white transition-all hover:scale-[1.01] active:scale-[0.99]"
                  style={{ background: 'var(--accent)' }}>
                  <CheckCircle2 className="size-4" />
                  {confirmLabel}
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
