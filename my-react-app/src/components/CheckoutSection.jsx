import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/motion'

function CheckoutSection({ form, subtotal, itemCount, onChange, onSubmit }) {
  return (
    <motion.section
      id="checkout"
      className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-sand/70 bg-white shadow-soft">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div variants={fadeUp} className="relative bg-ink p-8 text-ivory lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <p className="text-[11px] font-bold uppercase tracking-[0.38em] text-gold-light">Checkout</p>
            </div>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Ready for your
              <br />
              <em className="italic text-gold-light">final details.</em>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/70">
              Share your delivery information below, then continue to a secure cash-on-delivery payment step.
            </p>

            <div className="mt-10 rounded-[1.5rem] border border-ivory/10 bg-ivory/5 p-6">
              <div className="flex items-center justify-between text-sm text-ivory/80">
                <span className="uppercase tracking-[0.16em]">Items</span>
                <span className="font-serif text-lg text-ivory">{itemCount}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.16em] text-ivory/80">Subtotal</span>
                <span className="font-serif text-2xl text-gold-light">${subtotal.toFixed(2)}</span>
              </div>
              <div className="mt-5 border-t border-ivory/10 pt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-light/80">
                Free shipping · Pay on delivery
              </div>
            </div>
          </motion.div>

          <motion.form variants={staggerContainer} onSubmit={onSubmit} className="grid gap-4 p-8 lg:p-12">
            <motion.input
              variants={fadeUp}
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={onChange}
              placeholder="Full Name"
              className="input-luxe"
            />
            <motion.input
              variants={fadeUp}
              type="tel"
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Phone Number"
              className="input-luxe"
            />
            <motion.textarea
              variants={fadeUp}
              name="address"
              value={form.address}
              onChange={onChange}
              placeholder="Delivery Address"
              rows="4"
              className="input-luxe resize-none"
            />
            <motion.input
              variants={fadeUp}
              type="text"
              name="city"
              value={form.city}
              onChange={onChange}
              placeholder="City"
              className="input-luxe"
            />
            <motion.button variants={fadeUp} type="submit" className="btn-primary mt-2 w-full">
              Continue to Payment
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </motion.button>
            <motion.p variants={fadeUp} className="text-center text-[11px] font-medium text-fawn">
              100% secure checkout · No real payment is processed
            </motion.p>
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}

export default CheckoutSection