import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { fadeUp, staggerContainer } from '../lib/motion'

function ProductGrid({ products, selectedSizes, onSelectSize, onAddToCart, addedProductId }) {
  return (
    <motion.section
      id="products"
      className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <p className="text-[11px] font-bold uppercase tracking-[0.38em] text-gold">The Collection</p>
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Three refined looks,
              <br className="hidden sm:block" /> one premium <em className="italic text-gold">mood</em>.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-taupe">
            A tight seasonal edit of signature silhouettes — designed to be combined, collected, and cherished.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              selectedSize={selectedSizes[product.id]}
              onSelectSize={onSelectSize}
              onAddToCart={onAddToCart}
              isAdded={addedProductId === product.id}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ProductGrid