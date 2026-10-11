import { useState } from 'react'
import { X } from 'lucide-react'
import { articles } from '../data/articles'
import Heading from './Heading'
import Media from './Media'

export default function FitnessInsights() {
  const [open, setOpen] = useState<string | null>(null)
  const a = articles.find((x) => x.id === open)
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Heading note="Sample editorial content for this demo. General information, not medical advice.">{'Train smarter.\nLive stronger.'}</Heading>
      <div className="grid gap-5 md:grid-cols-3">
        {articles.map((x) => (
          <button key={x.id} onClick={() => setOpen(x.id)} className="glass group overflow-hidden !bg-charcoal/80 text-left">
            <div className="aspect-[4/3] overflow-hidden"><Media src={x.img} alt="" className="h-full w-full transition duration-700 group-hover:scale-105" /></div>
            <div className="p-6">
              <p className="text-sm text-ice">{x.tag}</p>
              <h3 className="mt-2 text-2xl font-bold">{x.title}</h3>
              <p className="mt-2 text-steel">{x.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold uppercase tracking-wider">Read</span>
            </div>
          </button>
        ))}
      </div>
      {a && (
        <div role="dialog" aria-modal="true" aria-label={a.title} className="fixed inset-0 z-[90] grid place-items-center bg-obsidian/90 p-4" onClick={() => setOpen(null)} onKeyDown={(e) => e.key === 'Escape' && setOpen(null)}>
          <div className="glass relative max-h-[85vh] w-full max-w-xl overflow-auto !bg-charcoal p-8" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Close" autoFocus className="absolute right-4 top-4" onClick={() => setOpen(null)}><X /></button>
            <p className="text-sm text-ice">{a.tag} · Sample content</p>
            <h3 className="my-3 text-3xl font-bold">{a.title}</h3>
            {a.body.map((p) => <p key={p} className="mb-3 text-clean/85">{p}</p>)}
          </div>
        </div>
      )}
    </section>
  )
}
