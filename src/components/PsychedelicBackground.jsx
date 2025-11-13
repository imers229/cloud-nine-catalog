import { useEffect, useRef } from 'react'
import './PsychedelicBackground.css'

function PsychedelicBackground() {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      // Esperar a que VANTA esté disponible
      const initVanta = () => {
        if (window.VANTA) {
          vantaEffect.current = window.VANTA.CLOUDS({
            el: vantaRef.current,
            THREE: window.THREE,
            backgroundColor: 0x1a0033,
            skyColor: 0x68b8d7,
            cloudColor: 0xa4c1de,
            cloudShadowColor: 0x183560,
            sunColor: 0xff9919,
            sunGlareColor: 0xff6633,
            sunlightColor: 0xff9933,
            speed: 0.70,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00
          })
        } else {
          setTimeout(initVanta, 100)
        }
      }
      
      initVanta()
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  return (
    <div ref={vantaRef} className="psychedelic-background vanta-container"></div>
  )
}

export default PsychedelicBackground
