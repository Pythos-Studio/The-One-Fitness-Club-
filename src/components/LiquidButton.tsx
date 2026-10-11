import { ArrowRight } from 'lucide-react'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { href?: string; external?: boolean; children: ReactNode; ghost?: boolean }
export default function LiquidButton({ href, external, children, ghost, className = '', ...rest }: Props) {
  const cls = `liquid-btn group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-wider transition duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 ${
    ghost ? 'border border-ice/40 bg-white/5 text-clean hover:border-ice' : 'bg-electric text-white shadow-[0_10px_30px_-8px_#078BFF] hover:bg-ice hover:text-obsidian'
  } ${className}`
  const inner = <>{children}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden /></>
  if (href) return <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}
