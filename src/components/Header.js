import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import cpecLogo from '../assets/cpec_logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={cpecLogo} alt="CPEC Logo" className="logo-img" />
          <span className="logo-text">CPEC</span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/industries" className="nav-link" onClick={() => setIsMenuOpen(false)}>Industries</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
