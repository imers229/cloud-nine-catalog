import { useState } from 'react'
import { ShoppingCart, Trash2, Send } from 'lucide-react'
import './Cart.css'

function Cart({ cart, removeFromCart, clearCart }) {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = "593963654889"

  const toggleCart = () => setIsOpen(!isOpen)

  const sendToWhatsApp = () => {
    if (cart.length === 0) return

    let message = "¡Hola! 🍃 Me interesan los siguientes productos:\n\n"
    
    let total = 0
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`
      message += `   Precio: $${item.price} USD\n`
      message += `   Cantidad: ${item.quantity}\n\n`
      total += item.price * item.quantity
    })
    
    message += `💰 Total: $${total.toFixed(2)} USD\n\n`
    message += `¿Tienen disponibilidad de estos productos?`

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <>
      <button className="cart-toggle" onClick={toggleCart}>
        <ShoppingCart size={24} />
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </button>

      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>🛒 Mi Lista</h2>
          <button className="cart-close" onClick={toggleCart}>✕</button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Tu lista está vacía</p>
              <p>Agrega productos para consultar</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">${item.price} USD</p>
                      <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
                    </div>
                    <button 
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span className="cart-total-price">${totalPrice.toFixed(2)} USD</span>
                </div>
                
                <button className="cart-whatsapp-btn" onClick={sendToWhatsApp}>
                  <Send size={20} />
                  Consultar por WhatsApp
                </button>
                
                <button className="cart-clear-btn" onClick={clearCart}>
                  <Trash2 size={18} />
                  Vaciar lista
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {isOpen && <div className="cart-overlay" onClick={toggleCart}></div>}
    </>
  )
}

export default Cart
