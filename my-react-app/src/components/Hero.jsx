import { motion } from 'framer-motion'
import { fadeIn, fadeUp, staggerContainer } from '../lib/motion'

function Hero({ onShopNow }) {
  return (
    <motion.section
      id="home"
      className="px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-20"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <motion.div variants={staggerContainer}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.4em] text-stone-500">
            Luxury Clothing House
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-5 max-w-xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl lg:text-6xl">
            Premium essentials for a quiet, modern statement.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-lg text-base leading-7 text-stone-600 sm:text-lg">
            Explore three signature pieces designed with polished silhouettes, elegant textures, and understated
            confidence.
          </motion.p>
          <motion.button
            variants={fadeUp}
            type="button"
            onClick={onShopNow}
            className="mt-8 w-full rounded-full bg-stone-950 px-8 py-4 text-sm font-medium uppercase tracking-[0.24em] text-white transition hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-xl sm:w-auto"
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Shop Now
          </motion.button>
        </motion.div>

        <motion.div variants={fadeIn} className="overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(28,25,23,0.18)]">
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=80"
            alt="Luxury fashion hero"
            className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[640px]"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
