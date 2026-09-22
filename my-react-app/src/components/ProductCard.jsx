import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'

const sizes = ['S', 'M', 'L']

function ProductCard({ product, selectedSize, onSelectSize, onAddToCart, isAdded }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[2.2rem] border border-sand/70 bg-white shadow-soft transition duration-500 hover:shadow-lift"
    >
      <div className="relative m-3 overflow-hidden rounded-[1.7rem] bg-linen">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition duration-[1000ms] ease-out group-hover:scale-[1.07]"
        />

        <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-ivory backdrop-blur">
          New In
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-ivory/85 px-3 py-1.5 font-serif text-lg font-semibold text-ink shadow backdrop-blur">
          ${product.price}
        </span>

        <div className="pointer-events-none absolute inset-x-4 bottom-4 flex justify-center">
          <span className="translate-y-3 rounded-full bg-ivory/90 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-ink opacity-0 shadow-lift backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Signature piece
          </span>
        </div>
      </div>

      <div className="p-6 pt-4">
        <h3 className="font-serif text-2xl text-ink">{product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-taupe">{product.description}</p>

        <div className="mt-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-fawn">Select Size</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {sizes.map((size) => {
              const isActive = selectedSize === size

              return (
                <motion.button
                  key={size}
                  type="button"
                  onClick={() => onSelectSize(product.id, size)}
                  className={`rounded-full border px-4 py-3 text-sm font-semibold transition duration-200 ${
                    isActive
                      ? 'border-ink bg-ink text-ivory shadow-lg'
                      : 'border-sand bg-white text-taupe hover:border-gold hover:text-gold'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {size}
                </motion.button>
              )
            })}
          </div>
        </div>

        <motion.button
          type="button"
          onClick={() => onAddToCart(product)}
          className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full py-4 text-xs font-bold uppercase tracking-[0.24em] transition duration-300 ${
            isAdded ? 'bg-gold text-white shadow-rim' : 'bg-ink text-ivory hover:bg-coffee hover:shadow-lift'
          }`}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {isAdded ? (
            <>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 13l4 4L19 7" />
              </svg>
              Added to Bag
            </>
          ) : (
            'Add to Bag'
          )}
        </motion.button>
      </div>
    </motion.article>
  )
}

export default ProductCard