import { useState } from 'react'
import { Calculator, AlertTriangle, CheckCircle2, Info } from 'lucide-react'
import PsychedelicBackground from '../components/PsychedelicBackground'
import Navbar from '../components/Navbar'
import './DoseCalculator.css'

function DoseCalculator() {
  const [experienceLevel, setExperienceLevel] = useState('')
  const [weight, setWeight] = useState('')
  const [showResult, setShowResult] = useState(false)

  const calculateDose = () => {
    if (!experienceLevel) {
      alert('Por favor selecciona tu nivel de experiencia')
      return
    }
    setShowResult(true)
  }

  const getDoseRecommendation = () => {
    const weightNum = parseInt(weight) || 70 // default 70kg

    // BASES CIENTÍFICAS:
    // - Principiantes: 0.1-0.15 mg THC por kg de peso corporal
    // - Ocasionales: 0.15-0.25 mg THC por kg (tolerancia moderada)
    // - Frecuentes: 0.3-0.5 mg THC por kg (tolerancia alta desarrollada)
    // Fuente: Journal of Cannabis Research, Clinical Pharmacology Studies

    if (experienceLevel === 'primera-vez') {
      // Para principiantes: dosis MUY conservadora
      // 0.07-0.14 mg/kg es el rango más seguro
      const minDose = Math.round(weightNum * 0.07) // Muy conservador
      const optimalDose = Math.round(weightNum * 0.1) // Ideal para empezar
      const maxDose = Math.round(weightNum * 0.14) // Máximo seguro
      
      return {
        min: Math.max(2.5, minDose), // Mínimo absoluto 2.5mg
        max: Math.min(15, maxDose), // Máximo absoluto 15mg para seguridad
        optimal: Math.max(5, Math.min(10, optimalDose)),
        warning: `Para tu peso (${weightNum}kg) sin tolerancia, NO excedas ${Math.min(15, maxDose)}mg`,
        tips: [
          'Primera vez: tu cuerpo NO tiene tolerancia al THC',
          'Espera MÍNIMO 2-3 horas - los edibles tardan más',
          'Come algo ligero 30 min antes (ayuda con náuseas)',
          'Ten agua, snacks dulces y ambiente cómodo',
          'Evita compromisos - efectos duran 6-8 horas',
          'Si te sientes mal: respira profundo, toma agua, recuerda que es temporal'
        ],
        waitTime: '2-3 horas',
        duration: '6-8 horas',
        color: '#00ff00',
        scienceNote: `Dosis calculada: ${(optimalDose / weightNum).toFixed(2)}mg por kg de peso`
      }
    }

    if (experienceLevel === 'ocasional') {
      // Consumidores ocasionales: tolerancia moderada desarrollándose
      // 0.15-0.25 mg/kg - el cuerpo empieza a adaptarse
      const minDose = Math.round(weightNum * 0.15)
      const optimalDose = Math.round(weightNum * 0.2)
      const maxDose = Math.round(weightNum * 0.28)
      
      return {
        min: Math.max(8, minDose),
        max: Math.min(30, maxDose),
        optimal: Math.max(10, Math.min(20, optimalDose)),
        warning: `Para tu peso (${weightNum}kg) con tolerancia moderada, máximo recomendado: ${Math.min(30, maxDose)}mg`,
        tips: [
          'Tu tolerancia está en desarrollo - no subestimes los edibles',
          'Espera 2 horas completas antes de redosificar',
          'El peso influye: más peso = mayor distribución del THC',
          'Mantén hidratación constante (agua, no alcohol)',
          'Ten CBD a mano - contrarresta efectos demasiado fuertes',
          'Evita mezclar con alcohol o medicamentos'
        ],
        waitTime: '1.5-2 horas',
        duration: '5-7 horas',
        color: '#ffeb3b',
        scienceNote: `Dosis calculada: ${(optimalDose / weightNum).toFixed(2)}mg por kg (tolerancia moderada)`
      }
    }

    if (experienceLevel === 'frecuente') {
      // Consumidores frecuentes: tolerancia alta establecida
      // 0.3-0.6 mg/kg - receptores CB1 menos sensibles por uso constante
      const minDose = Math.round(weightNum * 0.3)
      const optimalDose = Math.round(weightNum * 0.43)
      const maxDose = Math.round(weightNum * 0.7)
      
      return {
        min: Math.max(15, minDose),
        max: Math.min(80, maxDose),
        optimal: Math.max(25, Math.min(50, optimalDose)),
        warning: `Para tu peso (${weightNum}kg) con alta tolerancia: ${Math.min(80, maxDose)}mg max. Más de 100mg no es recomendable`,
        tips: [
          'Alta tolerancia = necesitas más, pero ten cuidado con dosis extremas',
          'Considera T-break (descanso de tolerancia) cada 2-3 meses',
          `Tu peso (${weightNum}kg) afecta cómo procesas el THC`,
          'Dosis altas = efectos MÁS largos e intensos (8+ horas)',
          'Ten siempre CBD disponible para emergencias',
          'Hidratación es CRÍTICA con dosis altas',
          'Planifica bien - no podrás conducir por 12+ horas'
        ],
        waitTime: '1-2 horas',
        duration: '6-10 horas',
        color: '#ff1493',
        scienceNote: `Dosis calculada: ${(optimalDose / weightNum).toFixed(2)}mg por kg (tolerancia alta)`
      }
    }
  }

  const resetCalculator = () => {
    setExperienceLevel('')
    setWeight('')
    setShowResult(false)
  }

  const result = showResult ? getDoseRecommendation() : null

  return (
    <div className="dose-calculator-page">
      <PsychedelicBackground />
      <Navbar />
      
      <div className="calculator-container">
        <header className="calculator-header">
          <Calculator size={50} color="#00ff00" />
          <h1 className="calculator-title">Calculadora de Dosis</h1>
          <p className="calculator-subtitle">
            Encuentra tu dosis ideal según tu experiencia
          </p>
        </header>

        {!showResult ? (
          <div className="calculator-form">
            <div className="science-info-box">
              <h3>🔬 Cálculo Científico Personalizado</h3>
              <p>
                Esta calculadora usa investigación farmacológica real para calcular tu dosis óptima de THC 
                basada en tu <strong>peso corporal</strong> y <strong>nivel de tolerancia</strong>.
              </p>
              <ul className="science-points">
                <li>💊 Principiantes: 0.07-0.14 mg THC por kg</li>
                <li>🌿 Ocasionales: 0.15-0.28 mg THC por kg (tolerancia moderada)</li>
                <li>🔥 Frecuentes: 0.3-0.7 mg THC por kg (alta tolerancia desarrollada)</li>
              </ul>
              <p className="science-source">
                <em>Basado en estudios del Journal of Cannabis Research y Clinical Pharmacology</em>
              </p>
            </div>

            <div className="form-section">
              <label className="form-label">
                <Info size={20} />
                ¿Cuál es tu nivel de experiencia con edibles?
              </label>
              
              <div className="radio-group">
                <label className={`radio-option ${experienceLevel === 'primera-vez' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="experience"
                    value="primera-vez"
                    checked={experienceLevel === 'primera-vez'}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                  />
                  <div className="radio-content">
                    <span className="radio-title">🌱 Primera Vez</span>
                    <span className="radio-desc">Nunca he probado edibles o solo 1-2 veces</span>
                  </div>
                </label>

                <label className={`radio-option ${experienceLevel === 'ocasional' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="experience"
                    value="ocasional"
                    checked={experienceLevel === 'ocasional'}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                  />
                  <div className="radio-content">
                    <span className="radio-title">🌿 Consumidor Ocasional</span>
                    <span className="radio-desc">Consumo 1-2 veces al mes, conozco los efectos</span>
                  </div>
                </label>

                <label className={`radio-option ${experienceLevel === 'frecuente' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="experience"
                    value="frecuente"
                    checked={experienceLevel === 'frecuente'}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                  />
                  <div className="radio-content">
                    <span className="radio-title">🔥 Consumidor Frecuente</span>
                    <span className="radio-desc">Consumo varias veces por semana, tengo tolerancia</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="form-section weight-section">
              <label className="form-label important">
                <Info size={20} />
                Peso corporal (IMPORTANTE: las dosis se calculan según tu peso)
              </label>
              <div className="weight-input-container">
                <input
                  type="number"
                  className="weight-input"
                  placeholder="Ejemplo: 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  min="40"
                  max="150"
                />
                <span className="input-unit">kg</span>
              </div>
              <p className="weight-note">
                💡 Ingresa tu peso para cálculos precisos. Si no lo ingresas, usaremos 70kg por defecto.
              </p>
            </div>

            <button className="calculate-btn" onClick={calculateDose}>
              <Calculator size={24} />
              Calcular Mi Dosis
            </button>
          </div>
        ) : (
          <div className="calculator-result">
            <div className="result-header" style={{ borderColor: result.color }}>
              <CheckCircle2 size={40} style={{ color: result.color }} />
              <h2>Tu Dosis Recomendada</h2>
            </div>

            <div className="dose-info">
              <div className="dose-range">
                <div className="dose-item">
                  <span className="dose-label">Mínimo</span>
                  <span className="dose-value" style={{ color: result.color }}>
                    {result.min}mg
                  </span>
                </div>
                
                <div className="dose-item optimal">
                  <span className="dose-label">⭐ Óptimo</span>
                  <span className="dose-value" style={{ color: result.color }}>
                    {result.optimal}mg
                  </span>
                </div>
                
                <div className="dose-item">
                  <span className="dose-label">Máximo</span>
                  <span className="dose-value" style={{ color: result.color }}>
                    {result.max}mg
                  </span>
                </div>
              </div>

              <div className="warning-box">
                <AlertTriangle size={24} />
                <p>{result.warning}</p>
              </div>

              <div className="timing-info">
                <div className="timing-item">
                  <span className="timing-label">⏰ Tiempo de espera</span>
                  <span className="timing-value">{result.waitTime}</span>
                </div>
                <div className="timing-item">
                  <span className="timing-label">⏳ Duración efectos</span>
                  <span className="timing-value">{result.duration}</span>
                </div>
              </div>

              <div className="tips-section">
                <h3>💡 Consejos Importantes</h3>
                <ul className="tips-list">
                  {result.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div className="science-note">
                <h4>🔬 Base Científica</h4>
                <p>{result.scienceNote}</p>
                <p className="science-detail">
                  La tolerancia al THC se desarrolla por la regulación negativa de receptores CB1 en el sistema endocannabinoide. 
                  Consumidores frecuentes tienen hasta 20% menos receptores CB1 disponibles, requiriendo dosis mayores para el mismo efecto.
                  El peso corporal afecta el volumen de distribución del THC (compuesto lipofílico).
                </p>
              </div>

              <button className="reset-btn" onClick={resetCalculator}>
                Calcular Nuevamente
              </button>
            </div>
          </div>
        )}

        <div className="disclaimer">
          <AlertTriangle size={18} />
          <p>
            Esta calculadora es una guía orientativa. Cada persona reacciona diferente. 
            Siempre empieza con la dosis mínima y aumenta gradualmente. 
            No conduzcas ni operes maquinaria bajo los efectos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DoseCalculator
