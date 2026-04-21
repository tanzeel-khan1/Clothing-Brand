import { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ProductGrid from './components/ProductGrid'
import CartSidebar from './components/CartSidebar'
import CheckoutSection from './components/CheckoutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import PaymentPage from './pages/PaymentPage'
import OrderSuccessPage from './pages/OrderSuccessPage'
import { products } from './data/products'

const initialCheckoutForm = {
  fullName: '',
  phone: '',
  address: '',
  city: '',
}

function Storefront({
  selectedSizes,
  cartItems,
  cartOpen,
  addedProductId,
  checkoutForm,
  subtotal,
  cartCount,
  onOpenCart,
  onCloseCart,
  onNavigate,
  onSelectSize,
  onAddToCart,
  onCheckoutChange,
  onProceedToCheckout,
  onContinueToPayment,
  onRemoveItem,
}) {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <Navbar cartCount={cartCount} onOpenCart={onOpenCart} onNavigate={onNavigate} />

      <main>
        <Hero onShopNow={() => onNavigate('products')} />
        <AboutSection />
        <ProductGrid
          products={products}
          selectedSizes={selectedSizes}
          onSelectSize={onSelectSize}
          onAddToCart={onAddToCart}
          addedProductId={addedProductId}
        />
        <CheckoutSection
          form={checkoutForm}
          subtotal={subtotal}
          itemCount={cartCount}
          onChange={onCheckoutChange}
          onSubmit={onContinueToPayment}
        />
        <ContactSection />
      </main>

      <CartSidebar
        isOpen={cartOpen}
        items={cartItems}
        subtotal={subtotal}
        onClose={onCloseCart}
        onRemove={onRemoveItem}
        onCheckout={onProceedToCheckout}
      />

      <Footer />
    </div>
  )
}

function App() {
  const [selectedSizes, setSelectedSizes] = useState({})
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [addedProductId, setAddedProductId] = useState(null)
  const [checkoutForm, setCheckoutForm] = useState(initialCheckoutForm)
  const [orderConfirmation, setOrderConfirmation] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false })
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
      return
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSelectSize = (productId, size) => {
    setSelectedSizes((current) => ({
      ...current,
      [productId]: size,
    }))
  }

  const handleAddToCart = (product) => {
    const selectedSize = selectedSizes[product.id]

    if (!selectedSize) {
      toast.error(`Please select a size for ${product.name}.`, {
        position: 'top-right',
      })
      return
    }

    setCartItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex(
        (item) => item.productId === product.id && item.size === selectedSize,
      )

      if (existingItemIndex >= 0) {
        return currentItems.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [
        ...currentItems,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: selectedSize,
          quantity: 1,
        },
      ]
    })

    setCartOpen(true)
    setAddedProductId(product.id)
    toast.success(`${product.name} added to cart.`, {
      position: 'top-right',
    })

    window.setTimeout(() => {
      setAddedProductId(null)
    }, 1400)
  }

  const handleRemoveItem = (productId, size) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => !(item.productId === productId && item.size === size)),
    )
    toast.info('Item removed from cart.', {
      position: 'top-right',
    })
  }

  const handleCheckoutChange = (event) => {
    const { name, value } = event.target

    setCheckoutForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleProceedToCheckout = () => {
    setCartOpen(false)
    scrollToSection('checkout')
  }

  const handleContinueToPayment = (event) => {
    event.preventDefault()

    if (cartItems.length === 0) {
      toast.error('Your cart is empty. Add a product before continuing.', {
        position: 'top-right',
      })
      return
    }

    navigate('/payment')
  }

  const handlePaymentSuccess = () => {
    const orderId = `VLR-${Math.floor(100000 + Math.random() * 900000)}`

    setOrderConfirmation({
      orderId,
      items: cartItems,
      subtotal,
      customer: checkoutForm,
      paymentDate: new Date().toLocaleDateString(),
    })

    toast.success('Payment submitted successfully. This is a demo payment page.', {
      position: 'top-right',
    })
    setCartItems([])
    setSelectedSizes({})
    setCheckoutForm(initialCheckoutForm)
    setCartOpen(false)
    navigate('/order-success')
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Storefront
              selectedSizes={selectedSizes}
              cartItems={cartItems}
              cartOpen={cartOpen}
              addedProductId={addedProductId}
              checkoutForm={checkoutForm}
              subtotal={subtotal}
              cartCount={cartCount}
              onOpenCart={() => setCartOpen(true)}
              onCloseCart={() => setCartOpen(false)}
              onNavigate={scrollToSection}
              onSelectSize={handleSelectSize}
              onAddToCart={handleAddToCart}
              onCheckoutChange={handleCheckoutChange}
              onProceedToCheckout={handleProceedToCheckout}
              onContinueToPayment={handleContinueToPayment}
              onRemoveItem={handleRemoveItem}
            />
          }
        />
        <Route
          path="/payment"
          element={
            <PaymentPage
              cartItems={cartItems}
              subtotal={subtotal}
              checkoutForm={checkoutForm}
              onBackToStore={() => navigate('/')}
              onPaymentSuccess={handlePaymentSuccess}
            />
          }
        />
        <Route
          path="/order-success"
          element={
            <OrderSuccessPage
              orderConfirmation={orderConfirmation}
              onBackHome={() => navigate('/')}
              onShopAgain={() => navigate('/')}
            />
          }
        />
      </Routes>

      <ToastContainer
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover={false}
        theme="light"
      />
    </>
  )
}

export default App
