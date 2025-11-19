import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import './AgeVerification.css'

function AgeVerification({ onVerified }) {
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const checkAge = async () => {
      // Verificar si ya confirmó la edad
      const ageVerified = sessionStorage.getItem('ageVerified')
      
      if (ageVerified === 'true') {
        onVerified(true)
        return
      }

      // Pequeño delay para asegurar que todo está cargado
      await new Promise(resolve => setTimeout(resolve, 300))

      // Mostrar alerta con diseño personalizado
      const result = await Swal.fire({
        title: '¿Eres mayor de edad?',
        html: '<p style="font-size: 1.1rem; color: #fff; font-family: Righteous, cursive;">Debes ser mayor de 18 años para acceder a este sitio</p>',
        icon: 'warning',
        iconColor: '#ffeb3b',
        showCancelButton: true,
        confirmButtonText: 'Sí, soy mayor de edad',
        cancelButtonText: 'No, soy menor de edad',
        confirmButtonColor: '#ff1493',
        cancelButtonColor: '#8a2be2',
        allowOutsideClick: false,
        allowEscapeKey: false,
        background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.95), rgba(255, 20, 147, 0.95))',
        color: '#fff',
        customClass: {
          popup: 'psychedelic-popup',
          title: 'psychedelic-title',
          confirmButton: 'psychedelic-confirm-btn',
          cancelButton: 'psychedelic-cancel-btn'
        }
      })

      if (result.isConfirmed) {
        sessionStorage.setItem('ageVerified', 'true')
        
        // Mostrar animación de bienvenida
        setShowWelcome(true)
        
        // Esperar 1.5 segundos antes de continuar
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        onVerified(true)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        await Swal.fire({
          title: 'Acceso denegado',
          html: '<p style="font-size: 1.1rem; color: #fff; font-family: Righteous, cursive;">Debes ser mayor de edad para acceder</p>',
          icon: 'error',
          iconColor: '#ff1493',
          confirmButtonColor: '#8a2be2',
          confirmButtonText: 'Entendido',
          allowOutsideClick: false,
          background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.95), rgba(255, 20, 147, 0.95))',
          color: '#fff',
          customClass: {
            popup: 'psychedelic-popup',
            title: 'psychedelic-title',
            confirmButton: 'psychedelic-confirm-btn'
          }
        })
        
        window.location.href = 'https://www.google.com'
      }
    }

    checkAge()
  }, [onVerified])

  if (showWelcome) {
    return (
      <div className="welcome-container">
        <div className="explosion-bg"></div>
        <div className="welcome-content">
          <h1 className="welcome-title">🍃</h1>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #8a2be2 0%, #ff1493 100%)'
    }}>
    </div>
  )
}

export default AgeVerification
