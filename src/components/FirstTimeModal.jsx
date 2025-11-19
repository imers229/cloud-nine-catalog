import { useState, useEffect } from 'react'
import { X, ArrowRight } from 'lucide-react'
import './FirstTimeModal.css'

function FirstTimeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisitedBefore')
    const ageVerified = sessionStorage.getItem('ageVerified')
    
    // Show modal only if age is verified and hasn't visited before
    if (ageVerified === 'true' && hasVisited !== 'true') {
      // Small delay to let age verification animation finish
      setTimeout(() => {
        setIsOpen(true)
      }, 2000)
    }
  }, [])

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('hasVisitedBefore', 'true')
    }
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="first-time-overlay">
      <div className="first-time-modal">
        <button className="close-modal-btn" onClick={handleClose}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <div className="welcome-emoji">👋</div>
          <h2 className="modal-title">¿Primera vez aquí?</h2>
          <p className="modal-subtitle">
            Te guiamos en 3 pasos para una experiencia segura
          </p>
        </div>

        <div className="steps-container">
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">📚 Lee la Información</h3>
              <p className="step-desc">
                Conoce los cannabinoides, sus efectos y consejos importantes. 
                Haz clic en "⚠️ LEE ESTO PRIMERO" en el menú.
              </p>
            </div>
          </div>

          <div className="step-arrow">
            <ArrowRight size={30} />
          </div>

          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">🧮 Calcula tu Dosis</h3>
              <p className="step-desc">
                Usa nuestra calculadora para saber cuánto debes consumir 
                según tu experiencia. ¡Empieza siempre con poco!
              </p>
            </div>
          </div>

          <div className="step-arrow">
            <ArrowRight size={30} />
          </div>

          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">🛒 Elige tu Producto</h3>
              <p className="step-desc">
                Explora el catálogo, compara productos y agrega a tu lista. 
                Consulta por WhatsApp cuando estés listo.
              </p>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <label className="dont-show-checkbox">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
            />
            <span>No mostrar esto de nuevo</span>
          </label>

          <button className="start-btn" onClick={handleClose}>
            ¡Entendido! Empecemos
          </button>
        </div>

        <div className="modal-warning">
          ⚠️ Recuerda: Menos es más. Siempre empieza con dosis bajas.
        </div>
      </div>
    </div>
  )
}

export default FirstTimeModal
