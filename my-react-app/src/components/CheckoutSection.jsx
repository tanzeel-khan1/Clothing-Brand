import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/motion'

function CheckoutSection({ form, subtotal, itemCount, onChange, onSubmit }) {
  return (
    <motion.section
      id="checkout"
      className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_50px_rgba(28,25,23,0.08)] lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div variants={fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">Checkout</p>
            <h2 className="mt-4 font-serif text-3xl text-stone-950 sm:text-4xl">Continue to your payment page.</h2>
            <p className="mt-4 text-base leading-7 text-stone-600">
              Fill in delivery details here, then move to a separate payment page that looks like a real checkout
              experience.
            </p>

            <div className="mt-8 rounded-[1.5rem] bg-stone-50 p-5">
              <div className="flex items-center justify-between text-sm text-stone-600">
                <span>Items</span>
                <span>{itemCount}</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-stone-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>

          <motion.form variants={staggerContainer} onSubmit={onSubmit} className="grid gap-4">
            <motion.input
              variants={fadeUp}
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={onChange}
              placeholder="Full Name"
              className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-4 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white"
            />
            <motion.input
              variants={fadeUp}
              type="tel"
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Phone"
              className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-4 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white"
            />
            <motion.textarea
              variants={fadeUp}
              name="address"
              value={form.address}
              onChange={onChange}
              placeholder="Address"
              rows="4"
              className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-4 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white"
            />
            <motion.input
              variants={fadeUp}
              type="text"
              name="city"
              value={form.city}
              onChange={onChange}
              placeholder="City"
              className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-4 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white"
            />
            <motion.button
              variants={fadeUp}
              type="submit"
              className="mt-2 w-full rounded-full bg-stone-950 px-6 py-4 text-sm font-medium uppercase tracking-[0.24em] text-white transition hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-xl"
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue to Payment
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}

export default CheckoutSection
