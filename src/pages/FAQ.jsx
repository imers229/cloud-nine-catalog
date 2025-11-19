import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import PsychedelicBackground from '../components/PsychedelicBackground'
import Navbar from '../components/Navbar'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "¿Cómo dosificar correctamente? ¿Cuánto debo tomar?",
      answer: "Principiantes: Empezar con 5-10mg y esperar mínimo 2 horas antes de tomar más. Los edibles tardan entre 30 minutos y 2 horas en hacer efecto. Usuarios experimentados: 15-30mg. Avanzados: 30-50mg+. NUNCA excedas 100mg en una sola toma. Recuerda: siempre puedes tomar más, pero no puedes tomar menos una vez consumido."
    },
    {
      question: "¿Cuánto tiempo tarda en hacer efecto?",
      answer: "Los edibles (gomitas/chocolates) tardan entre 30 minutos y 2 horas en hacer efecto porque deben pasar por el sistema digestivo. El efecto total puede tardar hasta 2-3 horas en alcanzar su pico máximo. Por eso es CRUCIAL esperar antes de tomar más. Los efectos duran entre 4-8 horas dependiendo de la dosis y tu metabolismo."
    },
    {
      question: "¿Cómo debo almacenar los productos?",
      answer: "Guárdalos en un lugar fresco y seco, alejados de la luz directa del sol. Temperatura ideal: 15-25°C. Mantén en su empaque original sellado. Evita lugares húmedos como el baño. IMPORTANTE: Guárdalos fuera del alcance de niños y mascotas - parecen dulces normales. Duración: hasta 6 meses bien almacenados."
    },
    {
      question: "¿Hacen envíos? ¿Cuáles son las formas de pago?",
      answer: "Contáctanos por WhatsApp para consultar sobre envíos a tu zona. Trabajamos con efectivo y transferencias bancarias. Los detalles específicos de pago te los proporcionamos al confirmar tu pedido. Envíos discretos y seguros."
    },
    {
      question: "¿Qué hago si me pasé de dosis y me siento mal?",
      answer: "MANTÉN LA CALMA - no puedes tener una sobredosis fatal con THC. Síntomas comunes: ansiedad, paranoia, taquicardia, mareos. QUÉ HACER: 1) Respira profundo y lento. 2) Toma agua. 3) Acuéstate en un lugar cómodo. 4) Recuerda que es temporal (pasará en unas horas). 5) Escucha música relajante o mira algo tranquilo. 6) Come algo dulce (ayuda). 7) Si tienes CBD puro, tómalo (contrarresta el THC)."
    },
    {
      question: "¿Puedo conducir después de consumir?",
      answer: "NO. Absolutamente NO conduzcas ni operes maquinaria pesada después de consumir. Los efectos afectan tus reflejos, coordinación y juicio. Espera mínimo 8-12 horas después de que los efectos hayan pasado completamente. Es ilegal y peligroso."
    },
    {
      question: "¿Puedo mezclar con alcohol u otras sustancias?",
      answer: "NO se recomienda mezclar con alcohol - puede intensificar ambos efectos de forma impredecible y causar náuseas severas. NO mezclar con otras drogas o medicamentos sin consultar a un médico. Especial cuidado con antidepresivos, ansiolíticos y sedantes."
    },
    {
      question: "¿Son legales estos productos?",
      answer: "Nuestros productos contienen cannabinoides derivados del hemp con menos del 0.3% de Delta-9 THC, cumpliendo con regulaciones federales en muchos países. Sin embargo, las leyes varían por región. Es responsabilidad del comprador conocer y cumplir las leyes locales. Solo para mayores de 18 años."
    },
    {
      question: "¿Qué diferencia hay entre gomitas y chocolates?",
      answer: "Efectos similares, diferencia principal es el sabor y tiempo de absorción. Gomitas: más fáciles de dosificar, sabores frutales, absorción ligeramente más rápida. Chocolates: más ricos, pueden derretirse con calor, grasa del chocolate puede acelerar absorción. Ambos tienen la misma duración de efectos."
    },
    {
      question: "¿Puedo consumir si tomo medicamentos?",
      answer: "CONSULTA CON TU MÉDICO PRIMERO. Los cannabinoides pueden interactuar con: anticoagulantes, antidepresivos, ansiolíticos, medicamentos para presión arterial, sedantes, anticonvulsivos. Si tomas medicamentos regularmente, siempre consulta antes de consumir."
    },
    {
      question: "¿Por qué no siento nada después de 1 hora?",
      answer: "Es NORMAL. Los edibles pueden tardar hasta 2 horas en hacer efecto, algunos metabolismos son más lentos. Factores que afectan: si comiste antes, tu metabolismo, tu tolerancia. NUNCA tomes más antes de completar 2 horas de espera. Muchos se pasan de dosis por impaciencia."
    },
    {
      question: "¿Puedo consumir estando embarazada o amamantando?",
      answer: "NO. No se recomienda el consumo de cannabinoides durante el embarazo o lactancia. Puede afectar el desarrollo del bebé. Consulta con tu médico."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-page">
      <PsychedelicBackground />
      <Navbar />
      
      <div className="faq-container">
        <header className="faq-header">
          <h1 className="faq-title">❓ Preguntas Frecuentes</h1>
          <p className="faq-subtitle">
            Todo lo que necesitas saber antes de consumir
          </p>
        </header>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? 
                  <ChevronUp size={24} /> : 
                  <ChevronDown size={24} />
                }
              </button>
              
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
