import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import PsychedelicBackground from '../components/PsychedelicBackground'
import { Cloud, Candy, Cookie, PlaneTakeoff, Zap, AlertTriangle, CloudFog } from 'lucide-react'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === parseInt(id))

  const whatsappNumber = "593963654889"
  
  const handleWhatsAppClick = () => {
    const message = `¡Hola! 🌥️ Quiero hacer un pedido de Cloud Nine.\n\nProducto: ${product.name}\nPrecio: $${product.price} USD\n\nCantidad y detalles adicionales: `
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  if (!product) {
    return (
      <div className="product-detail">
        <div className="error-message">
          <h2><CloudFog size={60} strokeWidth={2} /> Vuelo No Encontrado</h2>
          <button onClick={() => navigate('/')}>Volver al Hangar</button>
        </div>
      </div>
    )
  }

  return (
    <div className="product-detail">
      <PsychedelicBackground />
      <button className="back-btn" onClick={() => navigate('/')}>
        <Cloud className="icon-btn" size={24} strokeWidth={2.5} /> Volver al Cielo
      </button>

      <div className="detail-container">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-content">
          <div className="category-badge">
            {product.category === 'gomitas' ? (
              <><Candy size={20} strokeWidth={2.5} /> Sweet Clouds</>
            ) : (
              <><Cookie size={20} strokeWidth={2.5} /> Chocolate Sky</>
            )}
          </div>
          
          <h1 className="detail-title">{product.name}</h1>
          
          <p className="detail-price">${product.price} USD</p>

          <div className="detail-description">
            <h2>Tu Experiencia Celestial</h2>
            <p>{product.description}</p>
          </div>

          <div className="detail-specs">
            <h2>Especificaciones del Vuelo</h2>
            <ul>
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <button className="whatsapp-order-btn" onClick={handleWhatsAppClick}>
            <PlaneTakeoff className="icon-btn" size={32} strokeWidth={2.5} />
            Despegar Ahora
          </button>

          <div className="warning-message">
            <p><AlertTriangle className="icon-inline-small" size={20} strokeWidth={2.5} /> +18 Únicamente | Disfruta con Responsabilidad</p>
          </div>
        </div>
      </div>

      <div className="bottom-whatsapp">
        <button className="whatsapp-order-btn" onClick={handleWhatsAppClick}>
          <Zap className="icon-btn" size={32} strokeWidth={2.5} />
          Confirma Tu Despegue
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
