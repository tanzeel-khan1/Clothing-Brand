import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { fadeUp, staggerContainer } from '../lib/motion'

function ProductGrid({ products, selectedSizes, onSelectSize, onAddToCart, addedProductId }) {
  return (
    <motion.section
      id="products"
      className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} className="mb-10 flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">Featured Products</p>
          <h2 className="font-serif text-3xl text-stone-950 sm:text-4xl">Three refined looks, one premium mood.</h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
