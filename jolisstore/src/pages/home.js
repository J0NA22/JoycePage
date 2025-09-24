import React, { useState, useEffect } from 'react';
import './home.css'; // Importamos el CSS normal
import toallas from '../assets/toallas.png';
import utensilios from '../assets/utensilios.png';
import faldajapones from '../assets/faldajapones.webp';
import setbaño from '../assets/setbaño.webp'

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  
  // Animaciones al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.product-card, .benefit-card, .testimonial-card');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    // Inicializar animaciones
    document.querySelectorAll('.product-card, .benefit-card, .testimonial-card').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Añadir al carrito
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      const updatedItems = existingItem
        ? prevItems.map(item => 
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevItems, { ...product, quantity: 1 }];
      
      localStorage.setItem('jolisCart', JSON.stringify(updatedItems));
      return updatedItems;
    });
    showNotification(`${product.name} añadido al carrito`);
  };

  // Mostrar notificación
  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `<span>${message}</span>`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  // Datos de ejemplo (reemplázalos con los tuyos)
  const featuredProducts = [
    { id: 1, name: 'Juego de Utensilios', price: 'C$ 450', image: utensilios },
    { id: 2, name: 'Toallas de Baño', price: 'C$ 600', image: toallas },
    {id: 3, name: 'Set de baño', price: 'C$ 500', image: setbaño},
    {id: 4, name: 'Falda Japonesa', price: 'C$ 415', image: faldajapones}
  ];

  const benefits = [
    { icon: '🚚', title: 'Entrega Rápida', description: 'Recibe tus productos en 24h en Malpaisillo' }
  ];

  const testimonials = [
    { text: '"Excelente servicio y productos de calidad"', author: '- María G., Malpaisillo' }
  ];

  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Productos para tu vida cotidiana</h1>
          <p>En Jolis Store Malpaisillo encuentras lo mejor para tu hogar</p>
          <a href="#productos" className="btn">Ver productos</a>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="featured-products" id="productos">
        <h2 className="section-title">Productos Destacados</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button 
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits">
        <h2 className="section-title">¿Por qué Jolis Store?</h2>
        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{item.icon}</div>
              <h3 className="benefit-title">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonials">
        <h2 className="section-title">Clientes Satisfechos</h2>
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">{item.text}</p>
            <p className="testimonial-author">{item.author}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;