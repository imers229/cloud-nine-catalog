import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../data/products'
import PsychedelicBackground from '../components/PsychedelicBackground'
import Navbar from '../components/Navbar'
import { Sparkles, AlertTriangle, ShoppingBag } from 'lucide-react'
import './ProductDetailPsycho.css';

function ProductDetail({ addToCart }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === parseInt(id))
  const [added, setAdded] = useState(false)

  const whatsappNumber = "593963654889"
  
  const handleWhatsAppClick = () => {
        const message = `¡Hola! 🍄 Me interesa este producto:\n\n${product.name}\nPrecio: $${product.price}\n\n¿Tienen disponibilidad?`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (!product) {
    return (
      <div className="product-detail">
        <div className="error-message">
          <h2>Producto No Encontrado</h2>
          <button onClick={() => navigate('/')}>Volver</button>
        </div>
      </div>
    )
  }

  return (
    <div className="product-detail">
      <PsychedelicBackground />
      <Navbar />
      
      <div className="detail-container">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← VOLVER
        </button>

        <div className="detail-content">
          <div className="detail-grid">
            <div className="detail-image-section">
              <img src={product.image} alt={product.name} className="detail-image" />
            </div>

            <div className="detail-info-section">
            <div className="category-badge">
              {product.category === 'gomitas' ? '🍬 Gomitas Mágicas' : '🍫 Chocolates Especiales'}
            </div>
            
            <h1 className="detail-title">{product.name}</h1>
            
            <div className="price-section">
              <p className="detail-price">${product.price} USD</p>
            </div>

            <div className="description-box">
              <h3>✨ La Magia en Cada Bocado</h3>
              <p>{product.description}</p>
            </div>

            <div className="specs-section">
              <h3>🔮 Especificaciones Mágicas</h3>
              <ul>
                {product.details.map((detail, index) => (
                  <li key={index}>• {detail}</li>
                ))}
              </ul>
            </div>

            <div className="action-buttons">
              <button 
                className={`add-to-list-btn ${added ? 'added' : ''}`}
                onClick={handleAddToCart}
              >
                {added ? (
                  <>✓ Agregado a la lista</>
                ) : (
                  <>
                    <ShoppingBag size={22} /> AGREGAR A LISTA
                  </>
                )}
              </button>
            </div>

            <div className="warning">
              <AlertTriangle size={18} /> +18 Únicamente | Si sabes, sabes.
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
