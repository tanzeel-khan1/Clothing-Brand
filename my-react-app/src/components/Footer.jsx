import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { fadeUp } from '../lib/motion'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setEmail('')
    toast.success('Welcome to the VELORA circle. Watch your inbox.', { position: 'top-right' })
  }

  return (
    <motion.footer
      className="border-t border-ink/10 bg-cream"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.4fr]">
          <div>
            <p className="font-serif text-3xl tracking-[0.3em] text-ink">
              VELORA<span className="text-base tracking-normal text-gold">*</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-taupe">
              Premium essentials crafted in small runs for a quiet, modern statement.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-fawn">Shop</p>
            <ul className="mt-5 space-y-3 text-sm text-taupe">
              {['The Collection', 'New Arrivals', 'Best Sellers', 'Gift Cards'].map((link) => (
                <li key={link}>
                  <a
                    href="#products"
                    className="relative inline-block text-taupe transition hover:text-ink"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-fawn">Company</p>
            <ul className="mt-5 space-y-3 text-sm text-taupe">
              {['Our Story', 'Sustainability', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#about"
                    className="relative inline-block text-taupe transition hover:text-ink"
                    onClick={(e) => {
                      e.preventDefault()
                      const map = { 'Our Story': 'about', Contact: 'contact' }
                      document.getElementById(map[link] || 'about')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-fawn">Join the Circle</p>
            <p className="mt-5 text-sm leading-6 text-taupe">
              Early access to seasonal drops and styling notes — no noise, ever.
            </p>
            <form onSubmit={handleSubscribe} className="mt-5 flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="input-luxe"
              />
              <button type="submit" className="btn-primary !px-6" aria-label="Subscribe">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-sand pt-6 text-xs text-fawn sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 VELORA. Luxury fashion demo website.</p>
          <p>
            Developed by{' '}
            <a href="https://tanzilbuilds.xyz" target="_blank" rel="noreferrer" className="font-bold text-gold hover:text-ink">
              TanzilBuilds
            </a>
            .
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer