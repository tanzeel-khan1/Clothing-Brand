import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/motion'

function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-stone-950 px-6 py-10 text-white lg:px-10">
        <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-300">
          Contact
        </motion.p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <motion.div variants={fadeUp}>
            <h3 className="font-serif text-2xl">Studio</h3>
            <p className="mt-2 text-sm leading-6 text-stone-300">24 Fashion Avenue, Karachi</p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <h3 className="font-serif text-2xl">Phone</h3>
            <p className="mt-2 text-sm leading-6 text-stone-300">+92 300 1234567</p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <h3 className="font-serif text-2xl">Email</h3>
            <p className="mt-2 text-sm leading-6 text-stone-300">hello@veloura-demo.com</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactSection
