import { motion } from 'framer-motion'
import { reveal } from '../lib/motion'
import Media from './Media'

const pillars = [
  ['Discipline', 'Build a consistent training habit.'],
  ['Strength', 'Challenge yourself at your own pace.'],
  ['Community', 'Train in an environment that encourages progress.']
]
export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-14 px-5 py-28 md:grid-cols-[1.05fr_1fr] md:items-center">
      <div className="relative pb-16 pr-10 md:pr-16">
        <motion.div initial={{ clipPath: 'inset(0 100% 0 0)' }} whileInView={{ clipPath: 'inset(0 0% 0 0)' }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="aspect-[4/5] overflow-hidden rounded-[2.5rem_.75rem_2.5rem_.75rem]">
          <Media src="/images/about.webp" alt="A trainer spotting a member on the bench" className="h-full w-full" />
        </motion.div>
        <motion.div {...reveal} className="absolute bottom-0 right-0 w-40 overflow-hidden rounded-[1.5rem_.5rem_1.5rem_.5rem] border-4 border-obsidian shadow-2xl sm:w-52">
          <Media src="/images/member1.webp" alt="Member training at the club" className="aspect-[4/5] w-full" />
        </motion.div>
      </div>
      <motion.div {...reveal}>
        <h2 className="h-lg">More than<br />a workout.</h2>
        <p className="mt-6 max-w-md text-lg text-clean/80">Progress comes from showing up, putting in the work, and staying consistent. The One Fitness Club is a place to train, challenge yourself, and keep moving towards your goals.</p>
        <ul className="mt-10 space-y-6">
          {pillars.map(([t, d]) => (
            <li key={t} className="border-l-2 border-electric pl-5"><h3 className="text-xl font-bold">{t}</h3><p className="mt-1 text-steel">{d}</p></li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
