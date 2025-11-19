import { Link } from 'react-router-dom'
import { products } from '../data/products'
import PsychedelicBackground from '../components/PsychedelicBackground'
import Navbar from '../components/Navbar'
import { Sparkles, ShoppingBag } from 'lucide-react'
import './CatalogPsycho.css';

function Catalog({ addToCart }) {
  const whatsappNumber = "593963654889"
    const whatsappMessage = "¡Hola! 🍄 Quiero saber más sobre sus productos.\n\nProducto que me interesa: "

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  const handleAddToCart = (e, product) => {
    e.preventDefault() // Prevent Link navigation
    addToCart(product)
    
    // Visual feedback
    const target = e.currentTarget
    target.textContent = '✓ Agregado'
    target.style.background = 'linear-gradient(135deg, #00ff00, #00cc00)'
    
    setTimeout(() => {
      const icon = target.querySelector('svg')
      if (icon) {
        target.textContent = ''
        target.appendChild(icon)
        target.appendChild(document.createTextNode(' Agregar a lista'))
      }
      target.style.background = ''
    }, 1500)
  }

  return (
    <div className="catalog">
      <PsychedelicBackground />
      <Navbar />
      <header className="catalog-header">
        <p className="pre-title">No todas las</p>
        <h1>GOMITAS</h1>
        <p className="post-title">son iguales...</p>
        <div className="magic-text">
          <p className="magic-line1">Estas tienen su</p>
          <h2 className="magic-word">MAGIA</h2>
          <p className="magic-tagline">Si sabes, sabes.</p>
        </div>
        <button className="whatsapp-btn-header" onClick={handleWhatsAppClick}>
          <Sparkles size={24} /> ESCRÍBENOS
        </button>
      </header>

      <section className="products-section">
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card-wrapper">
              <Link to={`/producto/${product.id}`} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-category">
                  {product.category === 'gomitas' ? '🍬 Gomitas Mágicas' : '🍫 Chocolates Especiales'}
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price} USD</p>
                <button className="product-btn">
                  <Sparkles size={20} /> VER DETALLES
                </button>
              </Link>
              <button 
                className="add-to-cart-btn"
                onClick={(e) => handleAddToCart(e, product)}
              >
                <ShoppingBag size={20} /> Agregar a lista
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Catalog
