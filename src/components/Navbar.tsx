import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import LiquidButton from './LiquidButton'

const links = ['Home', 'About', 'Facilities', 'Programs', 'Membership', 'Contact']
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach((l) => { const el = document.getElementById(l.toLowerCase()); if (el) io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [])
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6">
      <nav aria-label="Main" className={`glass mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6 ${scrolled ? '!bg-obsidian/90' : '!bg-white/5'}`}>
        <a href="#home" className="flex items-center gap-2.5 font-display text-sm font-bold uppercase leading-none tracking-tight sm:text-base"><img src="/images/logo.webp" alt="" className="h-9 w-9 rounded-full" />The One<br className="sm:hidden" /> <span className="text-ice">Fitness Club</span></a>
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} aria-current={active === l.toLowerCase() ? 'true' : undefined}
                className={`relative py-1 text-sm transition-colors hover:text-ice ${active === l.toLowerCase() ? 'text-ice' : 'text-clean/80'}`}>
                {l}
                {active === l.toLowerCase() && <motion.span layoutId="nav-u" className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-electric" />}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <LiquidButton href="#contact" className="!min-h-10 !px-4 !py-2 text-xs">Join the club</LiquidButton>
          <button className="grid h-10 w-10 place-items-center rounded-full lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="glass mx-auto mt-2 max-w-6xl !bg-obsidian/95 p-4 lg:hidden">
            {links.map((l) => (
              <li key={l}><a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="block rounded-lg px-3 py-3 font-display text-xl uppercase hover:text-ice">{l}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
