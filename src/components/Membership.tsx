import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { plans } from '../data/membership'
import { business, whatsappReady, waLink } from '../config/business'
import { reveal } from '../lib/motion'
import Heading from './Heading'
import LiquidButton from './LiquidButton'

export default function Membership({ selected, onSelect }: { selected: string; onSelect: (id: string) => void }) {
  return (
    <section id="membership" className="relative px-5 py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-electric/20 blur-3xl blob" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <Heading>{'Your next\nchapter starts here.'}</Heading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => {
            const on = selected === p.id
            return (
              <motion.div key={p.id} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}
                className={`glass !bg-charcoal/90 flex flex-col p-6 ${on ? '!border-electric shadow-[0_0_40px_-8px_#078BFF] -translate-y-1' : ''}`}>
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-sm text-steel">{p.duration}</p>
                <p className="my-5 font-display text-2xl font-bold">{p.price ? `₹${p.price.toLocaleString('en-IN')}` : <span className="text-base font-medium text-ice">Contact us for current membership plans</span>}</p>
                <ul className="mb-4 space-y-2 text-sm">{p.includes.map((x) => <li key={x} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-ice" aria-hidden />{x}</li>)}</ul>
                <p className="mb-5 text-xs text-steel">{p.terms}</p>
                <div className="mt-auto flex flex-col gap-2">
                  <LiquidButton ghost={!on} aria-pressed={on} onClick={() => onSelect(p.id)}>{on ? 'Selected' : 'Select plan'}</LiquidButton>
                  {whatsappReady && <a className="text-center text-sm text-ice hover:underline" target="_blank" rel="noopener noreferrer" href={waLink(`Hi ${business.name}, I'd like to enquire about the ${p.name} plan.`)}>Enquire on WhatsApp</a>}
                </div>
              </motion.div>
            )
          })}
        </div>
        <p className="mt-4 text-xs text-steel">Prices are not shown until confirmed by the club. Edit src/data/membership.ts.</p>
      </div>
    </section>
  )
}
