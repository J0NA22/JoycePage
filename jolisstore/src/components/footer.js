import React, { useState } from 'react';
import logo from '../assets/LOGO.png';
import './footer.css';
import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  CheckCircle,
  Warning,
  Error as ErrorIcon
} from '@mui/icons-material';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null, 'success', 'warning', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('warning');
      return;
    }

    // Simular envío del formulario
    const isSuccess = Math.random() > 0.5; // Simula éxito/error aleatorio
    
    if (isSuccess) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(null), 3000); // Ocultar mensaje después de 3 segundos
    } else {
      setStatus('error');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className='logo-container'>
            <img src={logo} alt="Logo de Jolis Store" className="logo-image" />
            <h2>Jolis Store</h2>
          </div>
          <p>Soluciones innovadoras para tu negocio</p>
        </div>
        
        <div className="footer-section">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <div className="contact-info">
            <LocationOn fontSize="small" />
            <span>Calle Falsa 123, Ciudad</span>
          </div>
          <div className="contact-info">
            <Phone fontSize="small" />
            <span>+1 234 567 890</span>
          </div>
          <div className="contact-info">
            <Email fontSize="small" />
            <span>info@miempresa.com</span>
          </div>
          
          <div className="social-links">
            <a href="#"><Facebook fontSize="small" /></a>
            <a href="#"><Twitter fontSize="small" /></a>
            <a href="#"><Instagram fontSize="small" /></a>
            <a href="#"><LinkedIn fontSize="small" /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Suscríbete para recibir nuestras últimas noticias y ofertas.</p>
          <form className="newsletter" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Suscribirse</button>
          </form>
          
          {status === 'success' && (
            <div className="status-message success">
              <CheckCircle fontSize="small" /> ¡Suscripción exitosa!
            </div>
          )}
          
          {status === 'warning' && (
            <div className="status-message warning">
              <Warning fontSize="small" /> Completa todos los campos
            </div>
          )}
          
          {status === 'error' && (
            <div className="status-message error">
              <ErrorIcon fontSize="small" /> Error al procesar
            </div>
          )}
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jolis Store. Todos los derechos reservados. | 
          <a href="https://www.youtube.com/watch?v=OJrX3aNPsHM">Política de privacidad</a> | <a href="https://www.youtube.com/watch?v=BtLSaxRnIhc">Términos de servicio</a></p>
      </div>
    </footer>
  );
};

export default Footer;