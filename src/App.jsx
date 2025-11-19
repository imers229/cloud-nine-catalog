import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AgeVerification from './components/AgeVerification'
import FirstTimeModal from './components/FirstTimeModal'
import Cart from './components/Cart'
import Catalog from './pages/Catalog'
import ProductDetail from './pages/ProductDetail'
import Information from './pages/Information'
import FAQ from './pages/FAQ'
import DoseCalculator from './pages/DoseCalculator'

function App() {
  const [isVerified, setIsVerified] = useState(null)
  const [cart, setCart] = useState([])

  const handleVerification = (verified) => {
    setIsVerified(verified)
  }

  const addToCart = (product) => {
    setCart(prevCart => {
      // Check if product already exists in cart
      const existingItem = prevCart.find(item => item.id === product.id)
      
      if (existingItem) {
        // Increase quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        // Add new product with quantity 1
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const clearCart = () => {
    setCart([])
  }

  if (isVerified === null) {
    return <AgeVerification onVerified={handleVerification} />
  }

  if (isVerified === false) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontSize: '1.5rem',
        textAlign: 'center',
        padding: '20px'
      }}>
        Redirigiendo...
      </div>
    )
  }

  return (
    <div className="App">
      <FirstTimeModal />
      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
      
      <Routes>
        <Route path="/" element={<Catalog addToCart={addToCart} />} />
        <Route path="/producto/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/informacion" element={<Information />} />
        <Route path="/preguntas" element={<FAQ />} />
        <Route path="/calculadora" element={<DoseCalculator />} />
      </Routes>
    </div>
  )
}

export default App
