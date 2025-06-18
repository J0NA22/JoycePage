import React, { useState } from 'react';
import './header.css';
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
      <div className="logo">LOGO</div>

      {/* Categorías (centro) */}

       {/* Botón menú móvil (solo visible en móvil) */}
      <button 
        className="mobile-menu-button"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <CloseIcon /> : <MenuIcon />}
      </button>
      <nav className={`categories ${showMobileMenu ? 'mobile-visible' : ''}`}>
        <div className="mobile-logo">LOGO</div>
        <a href="#">Maquillaje</a>
        <a href="#">Perfume</a>
        <a href="#">Jeans</a>
        <a href="#">Blusas</a>
        <a href="#">Zapatos</a>
        <a href="#">Vestidos</a>
        <a href="#">Complementos</a>
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
            <Search className="icon" /> Búsqueda
          </button>
          <button className="dropdown-button">
            <ShoppingCart className="icon" /> Carrito
          </button>
          <button className="dropdown-button">
            <AboutUsIcon className="icon" /> About Us
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