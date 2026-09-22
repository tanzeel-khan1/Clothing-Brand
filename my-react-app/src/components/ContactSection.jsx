import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/motion'

const contactItems = [
  {
    label: 'Studio',
    value: '24 Fashion Avenue, Milan, Italy',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 11l9-8 9 8M5 9.5V21h14V9.5" />
        <path d="M10 21v-6h4v6" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+44 20 1234 5678',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.27a2 2 0 0 1 2.1-.45c.9.35 1.85.58 2.8.7a2 2 0 0 1 1.7 2z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'hello@velora-demo.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M2 7l10 6 10-6" />
      </svg>
    ),
  },
]

function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-ink text-white shadow-lift">
        <div className="pointer-events-none absolute" />
        <div className="relative px-6 py-12 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <p className="text-[11px] font-bold uppercase tracking-[0.38em] text-gold-light">Contact</p>
              </div>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Visit the
                <br />
                <em className="italic text-gold-light">studio.</em>
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/70">
                Our Milan atelier is open by appointment. Questions about sizing, fabrics, or an order — we reply
                within one business day.
              </p>
              <button
                type="button"
                onClick={() => (window.location.href = 'mailto:hello@velora-demo.com')}
                className="btn-primary mt-8 !bg-gold !text-white hover:!bg-gold-light"
              >
                Get in Touch
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {contactItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="rounded-2xl border border-ivory/10 bg-ivory/5 p-6 transition duration-300 hover:border-gold/50 hover:bg-ivory/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-light">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 font-serif text-2xl text-ivory">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-ivory/70">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactSection