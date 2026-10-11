import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { plans } from '../data/membership'
import { business, whatsappReady, waLink } from '../config/business'
import Heading from './Heading'
import LiquidButton from './LiquidButton'

type Errors = Partial<Record<'name' | 'phone', string>>
const field = 'w-full rounded-xl border border-white/15 bg-obsidian/70 px-4 py-3 text-clean placeholder:text-steel focus:border-ice'

export default function InquiryForm({ plan, onPlan }: { plan: string; onPlan: (id: string) => void }) {
  const [v, setV] = useState({ name: '', phone: '', topic: 'Gym Membership', message: '' })
  const [err, setErr] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const set = (k: keyof typeof v) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setV({ ...v, [k]: e.target.value })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const er: Errors = {}
    if (v.name.trim().length < 2) er.name = 'Enter your name.'
    if (!/^\+?[0-9 ]{10,15}$/.test(v.phone.trim())) er.phone = 'Enter a valid phone number (10–15 digits).'
    setErr(er)
    if (Object.keys(er).length || !whatsappReady) return
    const planName = plans.find((p) => p.id === plan)?.name
    const text = `Hi ${business.name}!\nName: ${v.name}\nPhone: ${v.phone}\nInterested in: ${v.topic}${planName ? `\nPreferred plan: ${planName}` : ''}${v.message ? `\nMessage: ${v.message}` : ''}`
    window.open(waLink(text), '_blank', 'noopener,noreferrer')
    setSent(true)
  }
  const E = ({ m }: { m?: string }) => (m ? <p role="alert" className="mt-1 text-sm text-red-400">{m}</p> : null)

  return (
    <section id="contact" className="mx-auto max-w-3xl px-5 py-24">
      <Heading>{'Ready to\nget started?'}</Heading>
      <p className="-mt-6 mb-8 text-lg text-clean/80">Tell us a little about your goals, and connect with the team to learn more about membership.</p>
      <form onSubmit={submit} noValidate className="glass !bg-charcoal/90 grid gap-4 p-6 sm:grid-cols-2">
        <div><label htmlFor="n" className="mb-1 block text-sm">Name</label><input id="n" autoComplete="name" className={field} value={v.name} onChange={set('name')} aria-invalid={!!err.name} /><E m={err.name} /></div>
        <div><label htmlFor="p" className="mb-1 block text-sm">Phone number</label><input id="p" type="tel" autoComplete="tel" className={field} value={v.phone} onChange={set('phone')} aria-invalid={!!err.phone} /><E m={err.phone} /></div>
        <div><label htmlFor="t" className="mb-1 block text-sm">Interested in</label>
          <select id="t" className={field} value={v.topic} onChange={set('topic')}><option>Gym Membership</option><option>Personal Training</option><option>General Inquiry</option></select></div>
        <div><label htmlFor="pl" className="mb-1 block text-sm">Preferred plan (optional)</label>
          <select id="pl" className={field} value={plan} onChange={(e) => onPlan(e.target.value)}><option value="">No preference</option>{plans.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select></div>
        <div className="sm:col-span-2"><label htmlFor="m" className="mb-1 block text-sm">Message</label><textarea id="m" rows={4} className={field} value={v.message} onChange={set('message')} /></div>
        <div className="sm:col-span-2">
          <LiquidButton type="submit" disabled={!whatsappReady}>Open WhatsApp message</LiquidButton>
          {!whatsappReady && <p className="mt-3 text-sm text-amber-300">Add the verified WhatsApp number in src/config/business.ts to enable this button.</p>}
          {sent && <p role="status" className="mt-3 text-sm text-ice">WhatsApp opened with your message ready. Press send there to reach the club; it has not been sent yet.</p>}
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a className="text-ice hover:underline" href={`tel:${business.phone}`}>Call {business.phoneDisplay}</a>
            <a className="text-ice hover:underline" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
            <a className="text-ice hover:underline" href={business.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <p className="mt-3 text-xs text-steel">Your details are not stored by this website. They are only placed in the WhatsApp message you choose to send.</p>
        </div>
      </form>
    </section>
  )
}
