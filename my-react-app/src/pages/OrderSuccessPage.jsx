import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/motion'

function OrderSuccessPage({ orderConfirmation, onBackHome, onShopAgain }) {
  const items = orderConfirmation?.items ?? []
  const customer = orderConfirmation?.customer ?? {}
  const subtotal = orderConfirmation?.subtotal ?? 0

  return (
    <motion.div
      className="min-h-screen bg-[#f6f1ea] px-4 py-8 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div variants={fadeUp} className="mx-auto max-w-5xl rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_22px_60px_rgba(28,25,23,0.08)] lg:p-10">
        <div className="flex flex-col items-start gap-5">
          <motion.div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 180, damping: 14 }}
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">Order Confirmed</p>
            <h1 className="mt-3 font-serif text-4xl text-stone-950 sm:text-5xl">Thank you for your purchase.</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
              Your order has been placed successfully. This confirmation page is demo-only, but it follows a real
              post-payment flow.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <section className="rounded-[1.5rem] bg-stone-50 p-6">
            <div className="flex flex-col gap-2 border-b border-stone-200 pb-5">
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Order Number</p>
              <p className="text-xl font-semibold text-stone-950">{orderConfirmation?.orderId || 'Pending'}</p>
              <p className="text-sm text-stone-600">Placed on {orderConfirmation?.paymentDate || 'today'}</p>
            </div>

            <div className="mt-5 space-y-4">
              {items.length > 0 ? (
                items.map((item, index) => (
                  <motion.div
                    key={`${item.productId}-${item.size}`}
                    className="flex items-center gap-4 rounded-[1.25rem] bg-white p-4"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + index * 0.06 }}
                  >
                    <img src={item.image} alt={item.name} className="h-20 w-16 rounded-xl object-cover" />
                    <div className="flex-1">
                      <p className="font-medium text-stone-900">{item.name}</p>
                      <p className="mt-1 text-sm text-stone-600">Size: {item.size}</p>
                      <p className="text-sm text-stone-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-stone-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </motion.div>
                ))
              ) : (
                <div className="rounded-[1.25rem] bg-white p-4 text-sm text-stone-600">
                  No order items were available, but the confirmation page is ready.
                </div>
              )}
            </div>
          </section>

          <aside className="rounded-[1.5rem] bg-stone-950 p-6 text-white">
            <h2 className="font-serif text-3xl">Delivery Summary</h2>

            <div className="mt-6 space-y-4 text-sm text-stone-300">
              <div>
                <p className="uppercase tracking-[0.18em] text-stone-400">Customer</p>
                <p className="mt-2 text-base text-white">{customer.fullName || 'Guest Customer'}</p>
                <p className="mt-1">{customer.phone || 'No phone provided'}</p>
              </div>

              <div>
                <p className="uppercase tracking-[0.18em] text-stone-400">Address</p>
                <p className="mt-2">{customer.address || 'No address provided'}</p>
                <p className="mt-1">{customer.city || 'No city provided'}</p>
              </div>

              <div className="border-t border-white/15 pt-4">
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span>Total Paid</span>
                  <span className="text-lg font-semibold text-white">${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              <motion.button
                type="button"
                onClick={onShopAgain}
                className="w-full cursor-pointer rounded-full bg-white px-6 py-4 text-sm font-medium uppercase tracking-[0.24em] text-stone-950 transition hover:-translate-y-0.5 hover:bg-stone-100"
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Shop Again
              </motion.button>
              <motion.button
                type="button"
                onClick={onBackHome}
                className="w-full cursor-pointer rounded-full border border-white/20 px-6 py-4 text-sm font-medium uppercase tracking-[0.24em] text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Back Home
              </motion.button>
            </div>
          </aside>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default OrderSuccessPage
