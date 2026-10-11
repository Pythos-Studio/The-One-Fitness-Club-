import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { prefersReduced } from '../lib/motion'

export default function Preloader() {
  const skip = prefersReduced() || sessionStorage.getItem('intro') === '1'
  const [show, setShow] = useState(!skip)
  useEffect(() => {
    if (!show) return
    sessionStorage.setItem('intro', '1')
    const t = setTimeout(() => setShow(false), 1900)
    return () => clearTimeout(t)
  }, [show])
  return (
    <AnimatePresence>
      {show && (
        <motion.div aria-hidden className="fixed inset-0 z-[100] grid place-items-center bg-obsidian"
          initial={{ clipPath: 'circle(150% at 50% 50%)' }} exit={{ clipPath: 'circle(0% at 50% 50%)' }} transition={{ duration: 0.7, ease: 'easeInOut' }}>
          <motion.div className="absolute h-44 w-44 bg-electric/60 blur-2xl blob" initial={{ scaleX: 3, scaleY: 0.02, opacity: 0.9 }} animate={{ scaleX: 1, scaleY: 1, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }} />
          <div className="relative flex flex-col items-center text-center">
            <motion.img src="/images/logo.webp" alt="" className="h-28 w-28 rounded-full shadow-[0_0_60px_-10px_#078BFF]" initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} />
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}>
              <p className="mt-5 font-display text-2xl font-bold uppercase sm:text-3xl">The One Fitness Club</p>
              <p className="mt-2 text-sm text-ice">Strength · Discipline · Progress</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
