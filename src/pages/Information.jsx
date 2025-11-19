import { useState } from 'react'
import { AlertCircle, CheckCircle, Info, Pill, Brain, Heart, Moon, Sparkles } from 'lucide-react'
import PsychedelicBackground from '../components/PsychedelicBackground'
import Navbar from '../components/Navbar'
import './Information.css'

function Information() {
  const [activeTab, setActiveTab] = useState('thc')

  const cannabinoids = {
    thc: {
      name: 'THC (Delta-9)',
      icon: <Brain size={40} />,
      description: 'El tetrahidrocannabinol es el principal cannabinoide psicoactivo del cannabis.',
      positiveEffects: [
        'Te hace reír sin razón aparente (todo es más gracioso)',
        'La comida sabe 10 veces mejor - todo parece gourmet',
        'La música te envuelve como nunca antes',
        'Los colores se ven más vivos e intensos',
        'Esa serie aburrida ahora es lo más interesante del mundo',
        'Conversaciones profundas sobre el universo a las 3AM',
        'Tu cama se convierte en una nube de confort absoluto',
        'Creatividad desbordada - ideas geniales (o eso crees)'
      ],
      negativeEffects: [
        'Ansiedad o paranoia (dosis altas)',
        'Taquicardia temporal (dosis altas)',
        'Pérdida de memoria a corto plazo (dosis altas)',
        'Sequedad bucal',
        'Ojos rojos',
        'Mareos o desorientación (dosis altas)',
        'Aumento temporal de la presión arterial (dosis altas)'
      ]
    },
    cbd: {
      name: 'CBD (Cannabidiol)',
      icon: <Heart size={40} />,
      description: 'El cannabidiol es un cannabinoide no psicoactivo con múltiples propiedades terapéuticas.',
      positiveEffects: [
        'Bye bye estrés - como quitarte 10 kilos de encima',
        'Músculos relajados después de ese gym intenso',
        'Dormir como bebé (sin despertarte 5 veces)',
        'Mente clara y enfocada - sin la niebla mental',
        'Ansiedad social reducida - socializar es más fácil',
        'Inflamación calmada - articulaciones felices',
        'Energía equilibrada todo el día',
        'Estado de ánimo estable - menos montaña rusa emocional'
      ],
      negativeEffects: [
        'Somnolencia leve (dosis muy altas)',
        'Sequedad bucal (dosis muy altas)',
        'Posible interacción con algunos medicamentos (consultar médico)',
        'Cambios leves en el apetito (dosis muy altas)',
        'Diarrea (dosis muy altas)'
      ]
    },
    thca: {
      name: 'THCA (Ácido Tetrahidrocannabinólico)',
      icon: <Pill size={40} />,
      description: 'Precursor no psicoactivo del THC que se convierte en THC cuando se calienta.',
      positiveEffects: [
        'Cuerpo ligero y sin tensión',
        'Claridad mental mantenida - funcionas normal',
        'Músculos relajados sin estar "colocado"',
        'Energía natural sin nerviosismo',
        'Inflamación reducida - adiós dolores molestos',
        'Mente tranquila pero alerta',
        'Sistema inmune fortalecido',
        'Digestión mejorada y estómago contento'
      ],
      negativeEffects: [
        'Malestar estomacal leve (dosis muy altas)',
        'Posible sedación (dosis muy altas)',
        'Se convierte en THC psicoactivo al calentarse'
      ]
    },
    hhc: {
      name: 'HHC (Hexahidrocannabinol)',
      icon: <Moon size={40} />,
      description: 'Cannabinoide hidrogenado derivado del THC con efectos similares pero más suaves.',
      positiveEffects: [
        'Relax suave sin perder el control',
        'Euforia ligera - sonrisas genuinas',
        'Todo fluye más fácil - sin preocupaciones',
        'Creatividad activada pero sin locuras',
        'Dormir profundo - sueños vívidos interesantes',
        'Menos ansiedad que el THC normal',
        'Duración larga - aprovechas más el viaje',
        'Cuerpo flotante pero mente funcional'
      ],
      negativeEffects: [
        'Sequedad bucal',
        'Somnolencia (dosis altas)',
        'Posible ansiedad leve (dosis muy altas)',
        'Efectos psicoactivos moderados (dosis altas)'
      ]
    },
    thcb: {
      name: 'THC-B (Tetrahydrocannabutol)',
      icon: <Brain size={40} />,
      description: 'Cannabinoide recientemente descubierto con efectos potentes y únicos.',
      positiveEffects: [
        'Efecto más potente que el THC regular - menos es más',
        'Euforia intensa pero manejable',
        'Relajación profunda de todo el cuerpo',
        'Experiencia sensorial amplificada',
        'Creatividad y pensamiento lateral mejorado',
        'Conexión profunda con música y arte',
        'Efecto duradero - experiencia prolongada',
        'Sensación de bienestar general intensificada'
      ],
      negativeEffects: [
        'Sedación fuerte (dosis altas)',
        'Pérdida de coordinación (dosis altas)',
        'Ansiedad incrementada (dosis muy altas)',
        'Efectos más intensos que THC regular - dosificar con cuidado'
      ]
    },
    thcp: {
      name: 'THC-P (Tetrahydrocannabiphorol)',
      icon: <Sparkles size={40} />,
      description: 'Uno de los cannabinoides más potentes descubiertos, 33 veces más activo que el THC.',
      positiveEffects: [
        'Potencia extrema - microdosis es suficiente',
        'Alivio de dolor intenso y persistente',
        'Relajación profunda de nivel superior',
        'Euforia prolongada y envolvente',
        'Experiencia psicoactiva intensa pero placentera',
        'Efecto sedante perfecto para dormir',
        'Duración extendida - hasta 8+ horas',
        'Sensación de paz y tranquilidad absoluta'
      ],
      negativeEffects: [
        'Muy potente - fácil pasarse con la dosis',
        'Sedación extrema (dosis altas)',
        'Desorientación (dosis altas)',
        'Ansiedad intensa si se excede la dosis',
        'Coordinación muy afectada (dosis altas)',
        'Solo para usuarios muy experimentados'
      ]
    },
    delta8: {
      name: 'Delta-8 THC',
      icon: <Moon size={40} />,
      description: 'Versión suave del THC, más funcional y con menos ansiedad.',
      positiveEffects: [
        'Relax sin estar muy "elevado"',
        'Claridad mental superior al Delta-9',
        'Menos ansiedad y paranoia',
        'Productividad mejorada - puedes funcionar normal',
        'Apetito estimulado pero controlado',
        'Sueño reparador sin groggy al despertar',
        'Efecto corporal relajante',
        'Ideal para uso diurno - no te tumba'
      ],
      negativeEffects: [
        'Sequedad bucal leve',
        'Ojos levemente rojos',
        'Somnolencia ligera (dosis altas)',
        'Efectos más suaves que Delta-9 (para algunos es negativo)'
      ]
    },
    cbg: {
      name: 'CBG (Cannabigerol)',
      icon: <Heart size={40} />,
      description: 'La "célula madre" de los cannabinoides, con propiedades únicas y energizantes.',
      positiveEffects: [
        'Energía y enfoque mental - como café sin nervios',
        'Estado de alerta mejorado',
        'Digestión optimizada - estómago feliz',
        'Propiedades antibacterianas naturales',
        'Reducción de inflamación sin sedación',
        'Mejora el estado de ánimo sin psicoactividad',
        'Neuroprotector - protege tu cerebro',
        'Presión intraocular reducida (glaucoma)'
      ],
      negativeEffects: [
        'Puede causar hambre (dosis altas)',
        'Sequedad bucal leve',
        'Interacción con algunos medicamentos (consultar médico)'
      ]
    },
    cbn: {
      name: 'CBN (Cannabinol)',
      icon: <Moon size={40} />,
      description: 'El cannabinoide sedante por excelencia, ideal para dormir.',
      positiveEffects: [
        'El mejor amigo del insomnio - te noquea suave',
        'Sedación natural sin medicamentos pesados',
        'Relajación muscular profunda',
        'Calma la mente hiperactiva',
        'Dolor nocturno reducido',
        'Sueño profundo y reparador',
        'Sin resaca o groggy al despertar',
        'Apetito estimulado - útil para recuperación'
      ],
      negativeEffects: [
        'Somnolencia fuerte (es el objetivo, pero no uses de día)',
        'Puede causar mucho sueño (dosis altas)',
        'No mezclar con otros sedantes'
      ]
    }
  }

  return (
    <div className="information-page">
      <PsychedelicBackground />
      <Navbar />
      
      <div className="info-container">
        <header className="info-header">
          <h1 className="info-title">
            <Info size={50} /> Información Importante
          </h1>
          <p className="info-subtitle">
            Conoce los efectos y consejos sobre los cannabinoides en nuestros productos
          </p>
        </header>

        <div className="cannabinoid-tabs">
          {Object.keys(cannabinoids).map(key => (
            <button
              key={key}
              className={`tab-btn ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {cannabinoids[key].icon}
              <span>{cannabinoids[key].name}</span>
            </button>
          ))}
        </div>

        <div className="cannabinoid-content">
          <div className="cannabinoid-header">
            <h2>{cannabinoids[activeTab].name}</h2>
            <p className="cannabinoid-description">{cannabinoids[activeTab].description}</p>
          </div>

          <div className="effects-grid">
            <div className="effects-card positive">
              <h3>
                <CheckCircle size={30} /> Lo Bueno
              </h3>
              <ul>
                {cannabinoids[activeTab].positiveEffects.map((effect, index) => (
                  <li key={index}>✓ {effect}</li>
                ))}
              </ul>
            </div>

            <div className="effects-card negative">
              <h3>
                <AlertCircle size={30} /> Posibles Efectos Adversos
              </h3>
              <p className="warning-text">
                ⚠️ Estos efectos generalmente ocurren solo con <strong>dosis muy altas</strong>. 
                Es importante ajustar y controlar la dosis.
              </p>
              <ul>
                {cannabinoids[activeTab].negativeEffects.map((effect, index) => (
                  <li key={index}>• {effect}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="advice-section">
          <h2 className="advice-title">🌿 Consejos Importantes Antes de Consumir</h2>
          
          <div className="advice-grid">
            <div className="advice-card">
              <h3>💊 Comienza con Dosis Bajas</h3>
              <p>Si eres nuevo, empieza con 5-10mg y espera al menos 2 horas antes de consumir más. Los edibles tardan más en hacer efecto.</p>
            </div>

            <div className="advice-card">
              <h3>🍽️ Consume con Alimentos</h3>
              <p>Tomar con el estómago vacío puede intensificar los efectos. Es mejor consumir después de una comida ligera.</p>
            </div>

            <div className="advice-card">
              <h3>💧 Mantente Hidratado</h3>
              <p>Bebe suficiente agua antes y durante el consumo para evitar sequedad bucal y mantenerte hidratado.</p>
            </div>

            <div className="advice-card">
              <h3>🏠 Entorno Seguro</h3>
              <p>Consume en un lugar cómodo y familiar. Evita conducir o realizar actividades que requieran concentración.</p>
            </div>

            <div className="advice-card">
              <h3>⏰ Planifica tu Tiempo</h3>
              <p>Los efectos pueden durar entre 4-8 horas. Asegúrate de tener tiempo libre sin responsabilidades importantes.</p>
            </div>

            <div className="advice-card">
              <h3>👥 Compañía de Confianza</h3>
              <p>Especialmente si es tu primera vez, es recomendable estar con personas de confianza en un ambiente relajado.</p>
            </div>

            <div className="advice-card">
              <h3>🚫 Evita Mezclar</h3>
              <p>No mezcles con alcohol u otras sustancias. Esto puede potenciar efectos no deseados y resultar peligroso.</p>
            </div>

            <div className="advice-card">
              <h3>💊 Medicamentos</h3>
              <p>Si tomas medicamentos regularmente, consulta con tu médico antes de consumir cannabinoides. Pueden existir interacciones.</p>
            </div>

            <div className="advice-card">
              <h3>🧠 Conoce tu Tolerancia</h3>
              <p>Cada persona reacciona diferente. Lo que funciona para otros puede no ser ideal para ti. Escucha a tu cuerpo.</p>
            </div>

            <div className="advice-card">
              <h3>⚠️ Si te Sientes Mal</h3>
              <p>Mantén la calma, respira profundo, toma agua y descansa. Los efectos son temporales y pasarán.</p>
            </div>
          </div>
        </div>

        <div className="disclaimer">
          <AlertCircle size={24} />
          <p>
            <strong>Aviso Legal:</strong> Esta información es solo educativa. Los productos son para mayores de 18 años. 
            Consulta con un profesional de la salud antes de consumir si tienes condiciones médicas preexistentes. 
            El consumo responsable es fundamental.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Information
