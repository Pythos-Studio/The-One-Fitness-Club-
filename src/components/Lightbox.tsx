import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Shot } from '../data/gallery'
import Media from './Media'

export default function Lightbox({ items, index, onClose, onChange }: { items: Shot[]; index: number; onClose: () => void; onChange: (i: number) => void }) {
  const touch = useRef(0)
  const go = (d: number) => onChange((index + d + items.length) % items.length)
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1) }
    window.addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  })
  const s = items[index]
  return (
    <div role="dialog" aria-modal="true" aria-label={s.label} className="fixed inset-0 z-[90] grid place-items-center bg-obsidian/95 p-4"
      onClick={onClose} onTouchStart={(e) => (touch.current = e.touches[0].clientX)} onTouchEnd={(e) => { const d = e.changedTouches[0].clientX - touch.current; if (Math.abs(d) > 50) go(d < 0 ? 1 : -1) }}>
      <button aria-label="Close" className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10" onClick={onClose}><X /></button>
      <button aria-label="Previous" className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10" onClick={(e) => { e.stopPropagation(); go(-1) }}><ChevronLeft /></button>
      <button aria-label="Next" className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10" onClick={(e) => { e.stopPropagation(); go(1) }}><ChevronRight /></button>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-4xl">
        <Media src={s.src} alt={s.alt} className="mx-auto max-h-[78vh] w-auto max-w-full rounded-2xl" />
        <p className="mt-3 text-center text-steel">{s.label}</p>
      </div>
    </div>
  )
}
