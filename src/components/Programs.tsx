import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { programs } from '../data/programs'
import { reveal } from '../lib/motion'
import Heading from './Heading'
import Media from './Media'

export default function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-5 py-24">
      <Heading>{'Find your\nnext level.'}</Heading>
      <div className="grid gap-5 md:grid-cols-2">
        {programs.map((p, i) => (
          <motion.article key={p.id} {...reveal} transition={{ ...reveal.transition, delay: (i % 2) * 0.1 }} className="group relative min-h-[320px] overflow-hidden rounded-3xl">
            <Media src={p.img} alt={`${p.name} at the club`} className="absolute inset-0 h-full w-full transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
            <div className="glass absolute inset-x-4 bottom-4 p-5">
              <div className="flex items-start justify-between gap-3"><h3 className="text-2xl font-bold">{p.name}</h3><ArrowUpRight className="shrink-0 text-ice transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden /></div>
              <p className="mt-2 text-clean/80">{p.text}</p>
              <a href="#contact" className="mt-3 inline-block text-sm font-semibold uppercase tracking-wider text-ice hover:underline">Enquire now</a>
            </div>
          </motion.article>
        ))}
      </div>
      <p className="mt-4 text-xs text-steel">Programs are subject to confirmation by the club.</p>
    </section>
  )
}
