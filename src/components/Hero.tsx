import { useEffect, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin } from 'lucide-react'
import LiquidButton from './LiquidButton'
import Media from './Media'
import { openStatus } from '../lib/hours'
import { business } from '../config/business'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [status, setStatus] = useState(openStatus())
  useEffect(() => { const t = setInterval(() => setStatus(openStatus()), 60000); return () => clearInterval(t) }, [])
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse') return
    ref.current?.style.setProperty('--mx', `${e.clientX}px`); ref.current?.style.setProperty('--my', `${e.clientY}px`)
  }
  return (
    <section id="home" ref={ref} onPointerMove={onMove} className="relative flex min-h-[100svh] items-end overflow-hidden pb-14 pt-32 md:pb-20">
      <motion.div style={{ y }} className="absolute inset-0 -top-10 h-[116%]">
        <motion.div className="h-full w-full" initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}>
          <Media src="/images/hero.webp" alt="Resistance machines in the sunlit training floor at The One Fitness Club" className="h-full w-full object-[60%_50%]" />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-obsidian/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 hidden md:block" style={{ background: 'radial-gradient(520px circle at var(--mx,70%) var(--my,30%), rgba(7,139,255,.20), transparent 60%)' }} />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="mb-5 flex items-center gap-2 text-ice"><MapPin size={16} aria-hidden /> Tilak Nagar · Mumbai</p>
          <h1 className="h-xl">
            {['Built by', 'Discipline.'].map((l, i) => (
              <span key={l} className="block overflow-hidden pb-1"><motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ delay: 0.2 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>{l}</motion.span></span>
            ))}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-clean/85">Every rep counts. Every session moves you forward. Build strength, develop consistency, and work towards your fitness goals at The One Fitness Club.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LiquidButton href="#contact">Join the club</LiquidButton>
            <LiquidButton href="#facilities" ghost>Explore the gym</LiquidButton>
          </div>
        </div>
        <div className="glass max-w-xs p-5">
          <p className="flex items-center gap-2 text-sm"><span className={`h-2.5 w-2.5 rounded-full ${status.open ? 'bg-emerald-400' : 'bg-steel'}`} aria-hidden />{status.text}</p>
          <p className="mt-3 font-display text-lg font-bold uppercase leading-tight">Your training.<br />Your pace.<br />Your progress.</p>
          <p className="mt-3 text-xs text-steel">{business.hours}</p>
          <div className="mt-4 h-0.5 overflow-hidden rounded bg-white/10"><motion.div className="h-full bg-electric" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2.4, delay: 0.6 }} /></div>
        </div>
      </div>
    </section>
  )
}
