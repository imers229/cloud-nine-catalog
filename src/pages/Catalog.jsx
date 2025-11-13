import { Link } from 'react-router-dom'
import { products } from '../data/products'
import PsychedelicBackground from '../components/PsychedelicBackground'
import { Cloud, Sparkles, MessageCircle, Rocket, Plane } from 'lucide-react'
import './Catalog.css'

function Catalog() {
  const whatsappNumber = "593963654889"
  const whatsappMessage = "¡Hola! 🌥️ Quiero hacer un pedido de Cloud Nine.\n\nProducto que deseo: "

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  return (
    <div className="catalog">
      <PsychedelicBackground />
      <header className="catalog-header">
        <h1>
          <Cloud className="icon-cloud" size={60} strokeWidth={2.5} />
          Cloud Nine
          <Sparkles className="icon-sparkles" size={50} strokeWidth={2.5} />
        </h1>
        <p className="subtitle">Despega Hacia Tu Momento Perfecto</p>
        <p className="tagline">Endulza tu viaje, eleva tu experiencia</p>
        <button className="whatsapp-btn-header" onClick={handleWhatsAppClick}>
          <MessageCircle className="icon-btn" size={28} strokeWidth={2.5} /> Inicia Tu Vuelo
        </button>
      </header>

      <section className="products-section">
        <h2 className="section-title">
          <Plane className="icon-inline" size={40} strokeWidth={2.5} />
          Tu Pasaporte al Cielo
        </h2>
        <div className="products-grid">
          {products.map(product => (
            <Link to={`/producto/${product.id}`} key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">${product.price} USD</p>
                <button className="view-details-btn">
                  Descubre Más <Plane className="icon-btn-small" size={20} strokeWidth={2.5} />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="catalog-footer">
        <button className="whatsapp-btn-footer" onClick={handleWhatsAppClick}>
          <Rocket className="icon-btn" size={28} strokeWidth={2.5} /> Reserva Tu Viaje
        </button>
        <p className="footer-text">© 2025 Cloud Nine - Vuela Seguro, Vuela Alto</p>
      </footer>
    </div>
  )
}

export default Catalog
