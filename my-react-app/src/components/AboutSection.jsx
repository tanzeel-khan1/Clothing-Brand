import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/motion'

const features = [
  { num: '01', title: 'Atelier crafted', text: 'Every piece is finished by hand in small, considered runs.' },
  { num: '02', title: 'Premium fabrics', text: 'Satin, silk blends and breathable weaves chosen for longevity.' },
  { num: '03', title: 'Refined fit', text: 'Silhouettes that move with you, never against you.' },
]

function AboutSection() {
  return (
    <motion.section
      id="about"
      className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div variants={fadeUp} className="relative order-2 lg:order-1">
          <div className="absolute -inset-px -translate-x-4 translate-y-4 rounded-[2.2rem] border border-gold/35" />
          <div className="relative overflow-hidden rounded-[2.2rem] shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=80"
              alt="Velora atelier"
              className="h-[420px] w-full object-cover transition duration-[1200ms] ease-out hover:scale-[1.03] sm:h-[520px]"
            />
          </div>
          <div className="absolute -bottom-6 right-6 hidden rounded-2xl bg-ink px-6 py-4 text-ivory shadow-lift sm:block">
            <p className="font-serif text-3xl text-gold-light">Founded</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory/80">MMXXVI · Milan</p>
          </div>
        </motion.div>

        <motion.div variants={staggerContainer} className="order-1 lg:order-2">
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <p className="text-[11px] font-bold uppercase tracking-[0.38em] text-gold">Our Story</p>
          </motion.div>

          <motion.h2 variants={fadeUp} className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Minimal design.
            <br />
            <em className="italic text-gold">Premium presence.</em>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-base leading-7 text-taupe">
            Veloura began with a simple belief — that fewer, finer things outlast many. Each piece is built around
            elevated basics, careful tailoring, and a clean shopping experience that feels refined on every screen.
          </motion.p>

          <div className="mt-10 space-y-6">
            {features.map((feature) => (
              <motion.div key={feature.num} variants={fadeUp} className="flex gap-5">
                <span className="font-serif text-2xl text-gold">{feature.num}</span>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-ink">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-taupe">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AboutSection