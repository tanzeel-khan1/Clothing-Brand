import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/motion'

function AboutSection() {
  return (
    <motion.section
      id="about"
      className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_45px_rgba(28,25,23,0.06)] lg:p-10">
        <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
          About
        </motion.p>
        <div className="mt-4 grid gap-5 lg:grid-cols-2">
          <motion.h2 variants={fadeUp} className="font-serif text-3xl text-stone-950 sm:text-4xl">
            Minimal design. Premium presence.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base leading-7 text-stone-600">
            Veloura is a demo luxury clothing brand built around elevated basics, careful tailoring, and a clean
            shopping experience that feels refined on every screen.
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection
