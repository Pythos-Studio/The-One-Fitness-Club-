import { useState } from 'react'
import { motion } from 'framer-motion'
import { facilities } from '../data/gallery'
import Heading from './Heading'
import Media from './Media'
import Lightbox from './Lightbox'

export default function Facilities() {
  const [i, setI] = useState<number | null>(null)
  return (
    <section id="facilities" className="mx-auto max-w-6xl px-5 py-24">
      <Heading note="Tap any photo to see it full size.">{'Your space.\nYour strength.'}</Heading>
      <div className="grid auto-rows-[190px] grid-flow-dense grid-cols-2 gap-3 md:auto-rows-[230px] md:grid-cols-6">
        {facilities.map((s, n) => (
          <motion.button key={s.id} onClick={() => setI(n)} aria-label={`Open photo: ${s.label}`}
            initial={{ clipPath: 'inset(100% 0 0 0)' }} whileInView={{ clipPath: 'inset(0% 0 0 0)' }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.9, delay: (n % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative overflow-hidden rounded-2xl text-left ring-1 ring-white/5 transition hover:ring-2 hover:ring-ice ${s.cls ?? ''}`}>
            <Media src={s.src} alt={s.alt} className="h-full w-full transition duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 rounded-full bg-obsidian/55 px-3 py-1 text-sm backdrop-blur-md">{s.label}</span>
          </motion.button>
        ))}
      </div>
      {i !== null && <Lightbox items={facilities} index={i} onChange={setI} onClose={() => setI(null)} />}
    </section>
  )
}
