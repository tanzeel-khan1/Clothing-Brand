import { AnimatePresence, motion } from 'framer-motion'

function CartSidebar({ isOpen, items, subtotal, onClose, onRemove, onCheckout }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-[2px]"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          <motion.aside
            className="fixed right-0 top-0 z-[60] flex h-full w-full max-w-md flex-col bg-ivory shadow-lift"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-sand px-6 py-5">
              <div>
                <h3 className="font-serif text-2xl text-ink">Your Bag</h3>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-fawn">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-sand bg-white p-2 text-taupe transition duration-300 hover:rotate-90 hover:border-gold hover:text-gold"
                aria-label="Close cart"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {items.length > 0 ? (
                items.map((item, index) => (
                  <motion.div
                    key={`${item.productId}-${item.size}`}
                    className="group rounded-[1.5rem] border border-sand/70 bg-white p-4 shadow-soft"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex gap-4">
                      <img src={item.image} alt={item.name} className="h-28 w-24 rounded-2xl object-cover" />
                      <div className="flex flex-1 flex-col">
                        <p className="font-serif text-xl leading-tight text-ink">{item.name}</p>
                        <p className="mt-2 text-sm text-taupe">
                          Size {item.size} · Qty {item.quantity}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                          <p className="font-serif text-lg font-semibold text-ink">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            type="button"
                            onClick={() => onRemove(item.productId, item.size)}
                            className="text-xs font-bold uppercase tracking-[0.12em] text-taupe transition hover:text-gold"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="rounded-[1.5rem] border border-dashed border-parchment bg-cream px-6 py-14 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ivory shadow-soft">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H7" />
                      <circle cx="10" cy="19" r="1.2" />
                      <circle cx="18" cy="19" r="1.2" />
                    </svg>
                  </div>
                  <p className="mt-5 font-serif text-2xl text-ink">Your bag is empty</p>
                  <p className="mx-auto mt-2 max-w-[240px] text-sm leading-6 text-taupe">
                    Select a size and add one of the signature pieces to begin.
                  </p>
                </motion.div>
              )}
            </div>

            <div className="border-t border-sand bg-white/60 px-6 py-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-fawn">Subtotal</span>
                <span className="font-serif text-2xl text-ink">${subtotal.toFixed(2)}</span>
              </div>
              <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                </svg>
                Complimentary shipping included
              </p>
              <button
                type="button"
                onClick={onCheckout}
                disabled={items.length === 0}
                className="btn-primary w-full disabled:opacity-40"
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