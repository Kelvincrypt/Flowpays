import { useState } from 'react'
import { isAddress } from 'viem'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Plus, Trash2, Copy, Check, Search, X } from 'lucide-react'
import { toast } from 'sonner'

export interface Contact {
  id: string
  name: string
  address: string
  note: string
  createdAt: number
}

const STORAGE_KEY = 'flowpay_contacts'

export function loadContacts(): Contact[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as Contact[]
  } catch { return [] }
}

export function saveContacts(contacts: Contact[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
}

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

function initials(name: string) {
  return name.trim().split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
}

const AVATAR_COLORS = [
  ['#e0f0ff', '#1061a6'], ['#e8f5e9', '#1a8047'], ['#fef3e2', '#d97706'],
  ['#f3e8ff', '#7c3aed'], ['#fde8ef', '#ba2b4c'],
]

function avatarColor(id: string) {
  const n = id.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  return AVATAR_COLORS[n % AVATAR_COLORS.length]
}

interface Props {
  onSelectContact?: (address: string, name: string) => void
}

export default function Contacts({ onSelectContact }: Props) {
  const [contacts, setContacts] = useState<Contact[]>(loadContacts)
  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // Form state
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [note, setNote] = useState('')
  const [addrError, setAddrError] = useState('')

  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.address.toLowerCase().includes(search.toLowerCase()) ||
    c.note.toLowerCase().includes(search.toLowerCase())
  )

  const addContact = () => {
    if (!name.trim()) { toast.error('Name is required'); return }
    if (!isAddress(address)) { setAddrError('Invalid wallet address'); return }
    setAddrError('')
    const newContact: Contact = {
      id: Math.random().toString(36).slice(2),
      name: name.trim(),
      address,
      note: note.trim(),
      createdAt: Date.now(),
    }
    const updated = [newContact, ...contacts]
    setContacts(updated)
    saveContacts(updated)
    setName(''); setAddress(''); setNote(''); setShowForm(false)
    toast.success(`${newContact.name} saved to contacts`)
  }

  const deleteContact = (id: string) => {
    const updated = contacts.filter(c => c.id !== id)
    setContacts(updated)
    saveContacts(updated)
    toast.success('Contact removed')
  }

  const copyAddress = (id: string, addr: string) => {
    void navigator.clipboard.writeText(addr).then(() => {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 1800)
    })
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <section style={glass.card} className="p-5">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <Users className="size-5" style={{ color: 'var(--accent)' }} />
            <span className="display text-lg font-bold" style={{ color: 'var(--ink)' }}>Contacts</span>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold text-white transition-all hover:opacity-90"
            style={{ background: 'var(--accent)' }}
          >
            {showForm ? <X className="size-3.5" /> : <Plus className="size-3.5" />}
            {showForm ? 'Cancel' : 'Add'}
          </button>
        </div>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>Save wallet addresses with nicknames for quick sending.</p>
      </section>

      {/* Add form */}
      <AnimatePresence>
        {showForm && (
          <motion.section
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={glass.card} className="p-5 space-y-3">
              <p className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>New Contact</p>
              <input
                className="w-full rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
                style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)', color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
                placeholder="Name or nickname"
                value={name} onChange={e => setName(e.target.value)}
              />
              <div>
                <input
                  className="w-full rounded-xl px-3 py-2.5 text-sm mono outline-none focus:ring-2"
                  style={{ background: 'var(--surface-muted)', border: `1px solid ${addrError ? 'var(--danger)' : 'var(--border)'}`, color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
                  placeholder="0x… wallet address"
                  value={address} onChange={e => { setAddress(e.target.value); setAddrError('') }}
                />
                {addrError && <p className="text-xs mt-1" style={{ color: 'var(--danger)' }}>{addrError}</p>}
              </div>
              <input
                className="w-full rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
                style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)', color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
                placeholder="Note (e.g. Mom, landlord)"
                value={note} onChange={e => setNote(e.target.value)}
              />
              <button
                onClick={addContact}
                className="w-full rounded-2xl py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: 'var(--accent)' }}
              >
                Save Contact
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Search */}
      {contacts.length > 0 && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4" style={{ color: 'var(--subtle)' }} />
          <input
            className="w-full rounded-xl pl-9 pr-3 py-2.5 text-sm outline-none focus:ring-2"
            style={{ background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.68)', color: 'var(--ink)', ['--tw-ring-color' as string]: 'var(--focus)' }}
            placeholder="Search contacts…"
            value={search} onChange={e => setSearch(e.target.value)}
          />
        </div>
      )}

      {/* List */}
      {contacts.length === 0 ? (
        <div style={glass.card} className="p-8 flex flex-col items-center gap-2 text-center">
          <div className="flex size-12 items-center justify-center rounded-2xl mb-1" style={{ background: 'rgba(18,45,69,0.07)', color: 'var(--accent)' }}>
            <Users className="size-6" />
          </div>
          <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>No contacts yet</p>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>Tap "Add" to save a wallet address with a friendly name.</p>
        </div>
      ) : filtered.length === 0 ? (
        <div style={glass.card} className="p-6 text-center">
          <p className="text-sm" style={{ color: 'var(--muted)' }}>No contacts match "{search}"</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map(c => {
            const [bg, fg] = avatarColor(c.id)
            const isCopied = copiedId === c.id
            return (
              <motion.div key={c.id} layout style={glass.card} className="p-4 flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="flex size-11 shrink-0 items-center justify-center rounded-2xl text-sm font-bold"
                  style={{ background: bg, color: fg }}
                >
                  {initials(c.name)}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{c.name}</p>
                  <p className="mono text-xs truncate" style={{ color: 'var(--muted)' }}>
                    {c.address.slice(0, 10)}…{c.address.slice(-6)}
                  </p>
                  {c.note && <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--subtle)' }}>{c.note}</p>}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {onSelectContact && (
                    <button
                      onClick={() => onSelectContact(c.address, c.name)}
                      className="rounded-xl px-2.5 py-1.5 text-xs font-semibold text-white transition-all hover:opacity-90"
                      style={{ background: 'var(--accent)' }}
                    >
                      Send
                    </button>
                  )}
                  <button
                    onClick={() => copyAddress(c.id, c.address)}
                    className="flex size-8 items-center justify-center rounded-xl transition-all hover:bg-black/5"
                    title={isCopied ? 'Copied!' : 'Copy address'}
                  >
                    {isCopied
                      ? <Check className="size-3.5" style={{ color: 'var(--success)' }} />
                      : <Copy className="size-3.5" style={{ color: 'var(--muted)' }} />
                    }
                  </button>
                  <button
                    onClick={() => deleteContact(c.id)}
                    className="flex size-8 items-center justify-center rounded-xl transition-all hover:bg-red-50"
                    title="Remove contact"
                  >
                    <Trash2 className="size-3.5" style={{ color: 'var(--danger)' }} />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      )}
    </div>
  )
}
