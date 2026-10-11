import { MapPin, Phone, Clock, Instagram } from 'lucide-react'
import { business } from '../config/business'
import Heading from './Heading'
import LiquidButton from './LiquidButton'

export default function Location() {
  const rows = [
    { i: MapPin, t: business.address },
    { i: Clock, t: business.hours },
    { i: Phone, t: `${business.phoneDisplay} · ${business.altPhoneDisplay}`, href: `tel:${business.phone}` },
    { i: Instagram, t: `@${business.instagramHandle}`, href: business.instagramUrl }
  ]
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Heading>{'Your training\nstarts here.'}</Heading>
      <div className="grid gap-5 lg:grid-cols-[1fr_1.3fr]">
        <div className="glass !bg-charcoal/90 p-6 sm:p-8">
          <ul className="space-y-5">
            {rows.map(({ i: Icon, t, href }) => (
              <li key={t} className="flex gap-3"><Icon className="mt-1 shrink-0 text-ice" size={18} aria-hidden />{href ? <a href={href} className="hover:text-ice" {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{t}</a> : <span>{t}</span>}</li>
            ))}
          </ul>
          <div className="mt-8"><LiquidButton href={business.mapsUrl} external>Get directions</LiquidButton></div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-ice/20 shadow-[0_0_50px_-20px_#078BFF]">
          <iframe title="Map showing The One Fitness Club in Tilak Nagar" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[360px] w-full lg:h-full lg:min-h-[380px]"
            style={{ border: 0, filter: 'invert(.92) hue-rotate(185deg) saturate(.8) brightness(.95)' }}
            src={`https://www.google.com/maps?q=${business.lat},${business.lng}&z=16&output=embed`} />
        </div>
      </div>
    </section>
  )
}
