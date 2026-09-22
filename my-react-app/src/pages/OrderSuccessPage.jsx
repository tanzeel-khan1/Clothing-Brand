import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/motion'

function OrderSuccessPage({ orderConfirmation, onBackHome, onShopAgain }) {
  const items = orderConfirmation?.items ?? []
  const customer = orderConfirmation?.customer ?? {}
  const subtotal = orderConfirmation?.subtotal ?? 0

  return (
    <motion.div
      className="min-h-screen bg-ivory px-4 py-10 sm:px-6 lg:px-8 lg:py-16"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div
        variants={fadeUp}
        className="mx-auto max-w-5xl overflow-hidden rounded-[2.2rem] border border-sand/70 bg-white shadow-soft"
      >
        <div className="border-b border-sand bg-cream px-6 py-10 text-center sm:px-10 lg:py-14">
          <motion.div
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-ivory text-gold shadow-rim"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 180, damping: 14 }}
          >
            <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.38em] text-gold">Order Confirmed</p>
          <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Thank you for your purchase.</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-taupe">
            Your order has been placed successfully and is being prepared at the atelier. This confirmation page is
            demo-only, but it follows a real post-payment flow.
          </p>

          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
            {[
              { title: 'Order Number', value: orderConfirmation?.orderId || '—' },
              { title: 'Date Placed', value: orderConfirmation?.paymentDate || 'today' },
              { title: 'Total Paid', value: `$${subtotal.toFixed(2)}` },
            ].map((cell) => (
              <div key={cell.title} className="rounded-2xl border border-sand/70 bg-white px-5 py-4 shadow-soft">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-fawn">{cell.title}</p>
                <p className="mt-1.5 font-serif text-xl text-ink">{cell.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <section>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Ordered Pieces</p>
            </div>

            <div className="mt-5 space-y-4">
              {items.length > 0 ? (
                items.map((item, index) => (
                  <motion.div
                    key={`${item.productId}-${item.size}`}
                    className="flex items-center gap-4 rounded-[1.4rem] border border-sand/70 bg-cream/60 p-4"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + index * 0.06 }}
                  >
                    <img src={item.image} alt={item.name} className="h-20 w-16 rounded-xl object-cover" />
                    <div className="flex-1">
                      <p className="font-serif text-xl leading-tight text-ink">{item.name}</p>
                      <p className="mt-1 text-sm text-taupe">
                        Size {item.size} · Quantity {item.quantity}
                      </p>
                    </div>
                    <p className="font-serif text-lg font-semibold text-ink">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </motion.div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-parchment bg-cream p-6 text-sm text-taupe">
                  No order items were available, but the confirmation page is ready.
                </div>
              )}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button type="button" onClick={onShopAgain} className="btn-primary">
                Shop Again
              </button>
              <button type="button" onClick={onBackHome} className="btn-outline">
                Back Home
              </button>
            </div>
          </section>

          <aside className="rounded-[1.6rem] bg-ink p-6 text-white sm:p-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-light">Delivery Summary</p>
            </div>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="uppercase tracking-[0.18em] text-ivory/50">Customer</p>
                <p className="mt-2 font-serif text-xl text-ivory">{customer.fullName || 'Guest Customer'}</p>
                <p className="mt-1 text-ivory/70">{customer.phone || 'No phone provided'}</p>
              </div>

              <div>
                <p className="uppercase tracking-[0.18em] text-ivory/50">Address</p>
                <p className="mt-2 text-ivory/80">{customer.address || 'No address provided'}</p>
                <p className="mt-1 text-ivory/80">{customer.city || 'No city provided'}</p>
              </div>

              <div className="border-t border-ivory/10 pt-5">
                <div className="flex items-center justify-between text-ivory/70">
                  <span className="uppercase tracking-[0.14em]">Shipping</span>
                  <span className="font-semibold text-gold-light">Free</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold uppercase tracking-[0.14em]">Total Paid</span>
                  <span className="font-serif text-2xl text-gold-light">${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold-light">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
              Estimated delivery in 3–5 business days
            </div>
          </aside>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default OrderSuccessPage