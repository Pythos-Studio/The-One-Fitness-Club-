import { Instagram } from 'lucide-react'
import { social } from '../data/gallery'
import { business } from '../config/business'
import Heading from './Heading'
import Media from './Media'
import LiquidButton from './LiquidButton'

export default function InstagramGallery() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Heading note={`A hand-picked selection from @${business.instagramHandle}, not a live feed.`}>{'Real people.\nReal work.'}</Heading>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {social.map((s) => (
          <a key={s.id} href={business.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} — view on Instagram`} className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Media src={s.src} alt={s.alt} className="h-full w-full transition duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <Instagram className="absolute right-3 top-3 text-white drop-shadow" size={18} aria-hidden />
            <span className="absolute bottom-3 left-3 right-3 text-sm opacity-0 transition group-hover:opacity-100">{s.label}</span>
          </a>
        ))}
      </div>
      <div className="mt-8"><LiquidButton href={business.instagramUrl} external>Follow on Instagram</LiquidButton></div>
    </section>
  )
}
