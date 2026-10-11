import { business } from '../config/business'

export default function Footer() {
  const nav = ['Home', 'About', 'Facilities', 'Programs', 'Membership', 'Contact']
  return (
    <footer className="border-t border-white/10 px-5 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div><div className="flex items-center gap-3"><img src="/images/logo.webp" alt="" className="h-12 w-12 rounded-full" /><p className="font-display text-xl font-bold uppercase">{business.name}</p></div><p className="mt-3 max-w-xs text-sm text-steel">{business.address}</p></div>
        <nav aria-label="Footer"><ul className="grid grid-cols-2 gap-2 text-sm">{nav.map((n) => <li key={n}><a className="hover:text-ice" href={`#${n.toLowerCase()}`}>{n}</a></li>)}</ul></nav>
        <div className="space-y-2 text-sm text-steel">
          <a className="block hover:text-ice" href={`tel:${business.phone}`}>{business.phoneDisplay}</a><p>{business.hours}</p>
          <a className="block hover:text-ice" href={business.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram @{business.instagramHandle}</a>
          <p>This site stores no personal data.</p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-5 text-xs text-steel">
        Website concept crafted by <a className="text-ice hover:underline" href={business.studioUrl} target="_blank" rel="noopener noreferrer">{business.studioName}</a>.
      </p>
    </footer>
  )
}
