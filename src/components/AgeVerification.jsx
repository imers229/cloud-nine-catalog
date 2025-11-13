import { useEffect } from 'react'
import Swal from 'sweetalert2'

function AgeVerification({ onVerified }) {
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

      // Mostrar alerta
      const result = await Swal.fire({
        title: '¿Eres mayor de edad?',
        text: 'Debes ser mayor de 18 años para acceder a este sitio',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, soy mayor de edad',
        cancelButtonText: 'No, soy menor de edad',
        confirmButtonColor: '#667eea',
        cancelButtonColor: '#d33',
        allowOutsideClick: false,
        allowEscapeKey: false,
      })

      if (result.isConfirmed) {
        sessionStorage.setItem('ageVerified', 'true')
        onVerified(true)
        
        Swal.fire({
          title: '¡Bienvenido!',
          text: 'Disfruta de nuestros productos',
          icon: 'success',
          confirmButtonColor: '#667eea',
          timer: 2000,
          showConfirmButton: false
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        await Swal.fire({
          title: 'Acceso denegado',
          text: 'Debes ser mayor de edad para acceder a este sitio',
          icon: 'error',
          confirmButtonColor: '#d33',
          confirmButtonText: 'Entendido',
          allowOutsideClick: false
        })
        
        window.location.href = 'https://www.google.com'
      }
    }

    checkAge()
  }, [onVerified])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
    </div>
  )
}

export default AgeVerification
