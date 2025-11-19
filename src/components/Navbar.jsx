import { Link } from 'react-router-dom'
import { Home, AlertCircle, HelpCircle, Calculator } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">🍃 GOMITAS</span>
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">
            <Home size={20} />
            <span>Catálogo</span>
          </Link>
          
          <Link to="/informacion" className="navbar-link info-important">
            <AlertCircle size={22} className="pulse-icon" />
            <span>⚠️ LEE ESTO PRIMERO</span>
          </Link>

          <Link to="/calculadora" className="navbar-link">
            <Calculator size={20} />
            <span>Calculadora</span>
          </Link>

          <Link to="/preguntas" className="navbar-link">
            <HelpCircle size={20} />
            <span>FAQ</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
