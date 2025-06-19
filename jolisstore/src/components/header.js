import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './header.css';
import logo from '../assets/LOGO.png';
import { 
  Search, 
  ShoppingCart, 
  Info as AboutUsIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Add as AddIcon
} from '@mui/icons-material';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showMobileFab, setShowMobileFab] = useState(false);

    

  return (
    <header className="header">
      {/* Logo (izquierda) */}
      <div className="logo">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Logo de Jolis Store" className="logo-image" />
          <h1 className="logo">Jolis Store</h1>
      </Link>
      </div>

      {/* Categorías (centro) */}

       {/* Botón menú móvil (solo visible en móvil) */}
      <button 
        className="mobile-menu-button"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <CloseIcon /> : <MenuIcon />}
      </button>
      <nav className={`categories ${showMobileMenu ? 'mobile-visible' : ''}`}>
        <div className="mobile-menu-button">
          <div className='logo-container'>
            <img src={logo} alt="Logo de Jolis Store" className="logo-image" />
            <h1 className="logo">Jolis Store</h1>
          </div>
        </div>
        <a href="#">Ropa</a>
        <a href="#">Accesorios</a>
        <a href="#">Lencería</a>
        <a href="#">Zapatos</a>
        <a href="#">Bolsos</a>
        <a href="#">Deporte</a>
        <a href="#">Perfumes</a>
        <a href="#">Rebajas</a>
      </nav>

      {/* Botón y dropdown (derecha) */}
      {/* Botones desktop (derecha) */}
      <div 
        className="dropdown-container desktop-only"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <button className="menu-button">
          <MenuIcon fontSize="medium" />
        </button>
        <div className={`dropdown-buttons ${showDropdown ? 'visible' : ''}`}>
          <button className="dropdown-button">
            <Search className="icon" /> 
          </button>
          <button className="dropdown-button">
            <ShoppingCart className="icon" /> 
          </button>
          <button className="dropdown-button">
            <AboutUsIcon className="icon" /> 
          </button>
        </div>
      </div>

       {/* FAB para móvil */}
      <div className="mobile-fab-container">
        <button 
          className="mobile-fab"
          onClick={() => setShowMobileFab(!showMobileFab)}
        >
          <AddIcon />
        </button>

        <div className={`mobile-fab-buttons ${showMobileFab ? 'visible' : ''}`}>
          <button className="fab-button">
            <Search className="icon" />
          </button>
          <button className="fab-button">
            <ShoppingCart className="icon" />
          </button>
          <button className="fab-button">
            <AboutUsIcon className="icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;