import { ArrowUpRight } from 'lucide-react'
import { community } from '../data/gallery'
import Heading from './Heading'
import Media from './Media'

export default function TrainersCommunity() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Heading>{'Stronger\ntogether.'}</Heading>
      <div className="columns-2 gap-3 md:columns-3 [&>*]:mb-3">
        {community.map((s) => (
          <figure key={s.id} className="group relative break-inside-avoid overflow-hidden rounded-2xl">
            <Media src={s.src} alt={s.alt} className="h-auto w-full transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-obsidian/10 transition group-hover:bg-obsidian/45" />
            <figcaption className="absolute inset-x-2 bottom-2 flex items-center justify-between rounded-xl border border-ice/25 bg-obsidian/55 px-3 py-2 text-sm backdrop-blur-md">{s.label}<ArrowUpRight size={16} className="text-ice transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden /></figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
