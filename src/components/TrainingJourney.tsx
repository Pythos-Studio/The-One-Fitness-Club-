import { useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Heading from './Heading'
import Media from './Media'
import { prefersReduced } from '../lib/motion'

gsap.registerPlugin(ScrollTrigger)
const steps = [
  ['Show up', 'The first step is consistency.', '/images/treadmill.webp'],
  ['Put in the work', 'Focus on proper technique and effort.', '/images/strength.webp'],
  ['Build your routine', 'Progress at a sustainable pace.', '/images/ig-core.webp'],
  ['Keep moving forward', 'Stay committed to your individual goals.', '/images/member1.webp']
]
export default function TrainingJourney() {
  const root = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    if (prefersReduced()) { root.current?.querySelectorAll('.step').forEach((s) => s.classList.add('on')); return }
    const ctx = gsap.context(() => {
      gsap.fromTo('.line-fill', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.steps', start: 'top 60%', end: 'bottom 60%', scrub: true } })
      gsap.utils.toArray<HTMLElement>('.step').forEach((s) => ScrollTrigger.create({ trigger: s, start: 'top 62%', onEnter: () => s.classList.add('on'), onLeaveBack: () => s.classList.remove('on') }))
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={root} className="mx-auto max-w-5xl px-5 py-24">
      <Heading>{'Four steps.\nOne direction.'}</Heading>
      <div className="steps relative pl-8 md:pl-14">
        <div className="absolute bottom-0 left-2 top-0 w-0.5 bg-white/10 md:left-4"><div className="line-fill h-full origin-top bg-electric shadow-[0_0_14px_#078BFF]" /></div>
        {steps.map(([t, d, img], i) => (
          <div key={t} className="step relative grid items-center gap-6 py-10 opacity-35 transition-opacity duration-500 md:grid-cols-2 md:gap-12 [&.on]:opacity-100 [&.on_.dot]:bg-electric [&.on_.dot]:shadow-[0_0_12px_#078BFF]">
            <span className="dot absolute -left-[1.65rem] top-14 h-3 w-3 rounded-full bg-steel transition md:-left-[2.65rem]" />
            <div className={i % 2 ? 'md:order-2' : ''}>
              <p className="font-display text-ice">0{i + 1}</p>
              <h3 className="mt-1 text-4xl font-bold md:text-5xl">{t}</h3>
              <p className="mt-3 text-lg text-clean/75">{d}</p>
            </div>
            <motion.div initial={{ clipPath: 'inset(0 0 100% 0)' }} whileInView={{ clipPath: 'inset(0 0 0% 0)' }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="aspect-[4/3] overflow-hidden rounded-[1.75rem_.5rem_1.75rem_.5rem]">
              <Media src={img} alt={t} className="h-full w-full" />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
