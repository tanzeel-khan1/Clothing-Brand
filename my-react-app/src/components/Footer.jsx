import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'

function Footer() {
  return (
    <motion.footer
      className="border-t border-stone-200 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={fadeUp}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-stone-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>(c) 2026 VELORA. Luxury fashion demo website.</p>
        <p>Developed by <a href="https://portfolio-theta-seven-52.vercel.app/" target="_blank" className='text-blue-900 font-bold'>Tanzeel</a>.</p>
      </div>
    </motion.footer>
  )
}

export default Footer
