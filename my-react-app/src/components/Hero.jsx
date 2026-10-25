import { motion } from 'framer-motion'
import { fadeIn, fadeUp, staggerContainer } from '../lib/motion'

const marqueeItems = [
  'Free Shipping Worldwide',
  'Hand-Finished Details',
  'The Autumn Atelier 2026',
  'Easy Returns & Exchanges',
  'Limited Seasonal Runs',
]

function Hero({ onShopNow }) {
  return (
    <motion.section
      id="home"
      className="relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[520px] w-[520px] rounded-full bg-sand/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-gold-light/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div variants={staggerContainer}>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <p className="text-[11px] font-bold uppercase tracking-[0.38em] text-gold">The Autumn Atelier</p>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-2xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[5.2rem]"
            >
              Quiet luxury,
              <br />
              tailored for the{' '}
              <em className="font-serif italic text-gold">everyday</em>.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-7 max-w-lg text-[15px] leading-7 text-taupe sm:text-base sm:leading-8">
              Three signature pieces composed with polished silhouettes, rich textures, and understated confidence —
              made to be worn like a second skin.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button type="button" onClick={onShopNow} className="btn-primary">
                Shop the Collection
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <button type="button" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
                Our Story
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
              {['Atelier crafted', 'Premium fabrics', 'Easy returns'].map((item, i) => (
                <div key={item} className="flex items-center gap-2">
                  {i > 0 && <span className="mr-1 h-3 w-px bg-sand" />}
                  <span className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-gold" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-taupe">{item}</span>
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeIn} className="relative lg:pl-6">
            <div className="overflow-hidden rounded-[1.25rem] shadow-lift">
              <img
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1300&q=80"
                alt="Luxury fashion hero"
                className="h-[420px] w-full object-cover transition duration-[1200ms] ease-out hover:scale-[1.03] sm:h-[540px] lg:h-[620px]"
              />
            </div>

            <div className="absolute -bottom-8 -left-2 w-44 overflow-hidden rounded-[1rem] border-4 border-ivory shadow-lift sm:w-56 lg:-left-8">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80"
                alt="Tailoring detail"
                className="h-40 w-full object-cover sm:h-48"
              />
            </div>

            <div className="absolute -right-3 -top-7 z-10 hidden h-28 w-28 sm:flex sm:items-center sm:justify-center">
              <svg viewBox="0 0 100 100" className="h-full w-full rotate-slow">
                <defs>
                  <path id="veloraCircle" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" fill="none" />
                </defs>
                <text
                  style={{
                    fontSize: '10.5px',
                    letterSpacing: '2.2px',
                    fill: '#17130c',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  <textPath href="#veloraCircle">Your Brand · EST. 2026 · MADE TO BE WORN</textPath>
                </text>
              </svg>
              <div className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-ivory shadow-rim">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-14 border-y border-ink/10 bg-ink py-4 text-ivory lg:mt-6">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className="mx-10 flex shrink-0 items-center gap-10 text-[11px] font-bold uppercase tracking-[0.3em]"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-gold" />
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Hero