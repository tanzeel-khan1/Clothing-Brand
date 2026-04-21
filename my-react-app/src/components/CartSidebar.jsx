import { AnimatePresence, motion } from 'framer-motion'

function CartSidebar({ isOpen, items, subtotal, onClose, onRemove, onCheckout }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-[0_24px_80px_rgba(28,25,23,0.2)]"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">
              <h3 className="font-serif text-2xl text-stone-950">Your Cart</h3>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-stone-200 p-2 text-stone-700 transition hover:bg-stone-100"
                aria-label="Close cart"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {items.length > 0 ? (
                items.map((item, index) => (
                  <motion.div
                    key={`${item.productId}-${item.size}`}
                    className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex gap-4">
                      <img src={item.image} alt={item.name} className="h-28 w-24 rounded-2xl object-cover" />
                      <div className="flex-1">
                        <p className="font-serif text-xl text-stone-950">{item.name}</p>
                        <p className="mt-2 text-sm text-stone-600">Size: {item.size}</p>
                        <p className="mt-1 text-sm text-stone-600">Quantity: {item.quantity}</p>
                        <p className="mt-3 text-base font-semibold text-stone-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          type="button"
                          onClick={() => onRemove(item.productId, item.size)}
                          className="mt-3 text-sm font-medium text-red-500 transition hover:text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="rounded-[1.5rem] border border-dashed border-stone-300 bg-stone-50 px-6 py-12 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="font-serif text-2xl text-stone-900">Your cart is empty</p>
                  <p className="mt-3 text-sm leading-6 text-stone-500">
                    Select a size and add one of the signature pieces to begin.
                  </p>
                </motion.div>
              )}
            </div>

            <div className="border-t border-stone-200 px-6 py-5">
              <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.18em] text-stone-500">
                <span>Subtotal</span>
                <span className="text-base font-semibold tracking-normal text-stone-950">${subtotal.toFixed(2)}</span>
              </div>
              <button
                type="button"
                onClick={onCheckout}
                disabled={items.length === 0}
                className="w-full rounded-full bg-stone-950 px-6 py-4 text-sm font-medium uppercase tracking-[0.24em] text-white transition hover:-translate-y-0.5 hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Proceed to Checkout
              </button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  )
}

export default CartSidebar
