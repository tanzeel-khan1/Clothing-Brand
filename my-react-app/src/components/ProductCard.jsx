import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'

const sizes = ['S', 'M', 'L']

function ProductCard({ product, selectedSize, onSelectSize, onAddToCart, isAdded }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_20px_50px_rgba(28,25,23,0.08)] transition duration-300 hover:shadow-[0_24px_70px_rgba(28,25,23,0.12)]"
    >
      <div className="bg-[#efe7dd] p-4">
        <img src={product.image} alt={product.name} className="h-80 w-full rounded-[1.5rem] object-cover" />
      </div>

      <div className="p-6">
        <h3 className="font-serif text-2xl text-stone-950">{product.name}</h3>
        <p className="mt-3 text-xl font-semibold text-stone-900">${product.price}</p>
        <p className="mt-3 text-sm leading-6 text-stone-600">{product.description}</p>

        <div className="mt-6">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-700">Select Size</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {sizes.map((size) => {
              const isActive = selectedSize === size

              return (
                <motion.button
                  key={size}
                  type="button"
                  onClick={() => onSelectSize(product.id, size)}
                  className={`rounded-full border px-4 py-3 text-sm font-medium transition duration-200 ${
                    isActive
                      ? 'scale-[1.02] border-stone-950 bg-stone-950 text-white shadow-lg'
                      : 'border-stone-300 bg-white text-stone-800 hover:border-stone-950 hover:text-stone-950'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
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
          className="mt-6 w-full rounded-full bg-stone-950 px-6 py-4 text-sm font-medium uppercase tracking-[0.24em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-xl"
          whileHover={{ y: -4, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          {isAdded ? 'Added' : 'Order Now'}
        </motion.button>
      </div>
    </motion.article>
  )
}

export default ProductCard
