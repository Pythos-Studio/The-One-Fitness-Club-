import { motion } from 'framer-motion'
import LiquidButton from './LiquidButton'
import Media from './Media'
import { business } from '../config/business'

export default function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-32 text-center">
      <motion.div className="absolute inset-0 -z-10" initial={{ scale: 1.15 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.6 }}>
        <Media src="/images/final.webp" alt="Weights at The One Fitness Club" className="h-full w-full" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-obsidian/75" />
      <div className="blob absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-electric/25 blur-3xl" aria-hidden />
      <h2 className="h-xl mx-auto max-w-4xl">The work<br />starts here.</h2>
      <p className="mx-auto mt-6 max-w-md text-lg text-clean/85">Take the first step. Explore your membership options and find a training routine that works for you.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <LiquidButton href="#contact">Enquire about membership</LiquidButton>
        <LiquidButton href={business.mapsUrl} external ghost>Visit the club</LiquidButton>
      </div>
    </section>
  )
}
