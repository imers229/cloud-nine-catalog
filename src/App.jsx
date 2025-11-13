import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AgeVerification from './components/AgeVerification'
import Catalog from './pages/Catalog'
import ProductDetail from './pages/ProductDetail'

function App() {
  const [isVerified, setIsVerified] = useState(null)

  const handleVerification = (verified) => {
    setIsVerified(verified)
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
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
