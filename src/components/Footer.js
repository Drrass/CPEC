import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">CPEC</h3>
            <p className="footer-tagline">Engineering Smart. Scaling Safe. Delivering Excellence.</p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" onClick={scrollToTop}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop}>About</Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop}>Services</Link>
              </li>
              <li>
                <Link to="/industries" onClick={scrollToTop}>Industries</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact">
              <p><strong>Email:</strong> info@cpec.com</p>
              <p><strong>Phone:</strong> +1 (123) 456-7890</p>
              <p><strong>Location:</strong> 1234 Industry Road, City, State, ZIP</p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Get in Touch</h4>
            <Link to="/contact" className="footer-cta-btn" onClick={scrollToTop}>
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CPEC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
