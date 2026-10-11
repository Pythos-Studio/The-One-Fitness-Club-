import { motion } from 'framer-motion'
import { reveal } from '../lib/motion'
export default function Heading({ children, note }: { children: string; note?: string }) {
  return (
    <motion.div {...reveal} className="mb-10 md:mb-14">
      <h2 className="h-lg whitespace-pre-line">{children}</h2>
      {note && <p className="mt-4 max-w-lg text-steel">{note}</p>}
    </motion.div>
  )
}
