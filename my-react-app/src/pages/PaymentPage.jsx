import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/motion'

function PaymentPage({ cartItems, subtotal, checkoutForm, onBackToStore, onPaymentSuccess }) {
  const [form, setForm] = useState(() => ({
    email: '',
    fullName: checkoutForm?.fullName ?? '',
    phone: checkoutForm?.phone ?? '',
    streetAddress: checkoutForm?.address ?? '',
    city: checkoutForm?.city ?? '',
    zipCode: '',
  }))

  const itemCount = useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [cartItems])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.streetAddress || !form.phone || !form.fullName) return
    onPaymentSuccess()
  }

  return (
    <div className="min-h-screen bg-ivory">
      <header className="border-b border-sand/70 bg-ivory/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBackToStore}
            className="btn-outline !py-2.5 !px-5"
            whileTap={{ scale: 0.97 }}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Back
          </button>

          <div className="text-center">
            <p className="font-serif text-2xl tracking-[0.3em] text-ink">
              VELORA<span className="text-sm tracking-normal text-gold">*</span>
            </p>
            <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.3em] text-fawn">Secure Checkout</p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-sand bg-white/70 px-3 py-2">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="4" y="11" width="16" height="9" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-taupe">Encrypted</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <motion.div
          className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.section variants={fadeUp} className="rounded-[2.2rem] border border-sand/70 bg-white p-6 shadow-soft sm:p-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <p className="text-[11px] font-bold uppercase tracking-[0.38em] text-gold">Delivery Details</p>
            </div>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Cash on <em className="italic text-gold">delivery.</em>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-taupe">
              Your pieces will be delivered to the address below. Payment happens in cash when the order arrives at
              your door.
            </p>

            <motion.form variants={staggerContainer} onSubmit={handleSubmit} className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="input-luxe sm:col-span-2" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name *" required className="input-luxe" />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number *" required className="input-luxe" />
              </div>
              <input name="streetAddress" value={form.streetAddress} onChange={handleChange} placeholder="House / Street Address *" required className="input-luxe" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="city" value={form.city} onChange={handleChange} placeholder="City *" required className="input-luxe" />
                <input name="zipCode" value={form.zipCode} onChange={handleChange} placeholder="ZIP / Postal Code" className="input-luxe" />
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Cash on Delivery — Preferred
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-fawn">Pay later, here</span>
              </div>

              <motion.button type="submit" className="btn-primary mt-2 w-full">
                Place Order · ${subtotal.toFixed(2)}
              </motion.button>
              <motion.p className="text-center text-[11px] font-medium text-fawn">
                This is a demo checkout — no real payment is processed.
              </motion.p>
            </motion.form>
          </motion.section>

          <motion.aside variants={fadeUp} className="rounded-[2.2rem] bg-ink p-6 text-ivory shadow-lift sm:p-8 lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-light">Order Summary</p>
            <h2 className="mt-4 font-serif text-3xl">
              {itemCount} {itemCount === 1 ? 'piece' : 'pieces'} in your bag
            </h2>

            <div className="mt-6 space-y-4 border-t border-ivory/10 pt-6">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={`${item.productId}-${item.size}`} className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="h-16 w-14 rounded-xl object-cover" />
                    <div className="flex-1">
                      <p className="font-serif text-lg leading-tight text-ivory">{item.name}</p>
                      <p className="mt-0.5 text-xs text-ivory/60">
                        Size {item.size} · Qty {item.quantity}
                      </p>
                    </div>
                    <p className="font-serif text-lg text-gold-light">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-ivory/60">No items in cart.</p>
              )}
            </div>

            <div className="mt-6 space-y-2 border-t border-ivory/10 pt-5 text-sm text-ivory/75">
              <div className="flex justify-between">
                <span className="uppercase tracking-[0.14em] text-ivory/50">Shipping</span>
                <span className="font-semibold text-gold-light">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="uppercase tracking-[0.14em] text-ivory/50">Payment method</span>
                <span className="font-semibold text-ivory">Cash on Delivery</span>
              </div>
              <div className="flex items-center justify-between pt-2 text-lg">
                <span className="font-bold uppercase tracking-[0.14em]">Total</span>
                <span className="font-serif text-2xl text-gold-light">${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gold/30 bg-gold/10 p-4 text-sm leading-6 text-gold-light">
              <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
              You will pay in cash when the order is delivered. No advance payment needed.
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </div>
  )
}

export default PaymentPage