import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-tagline">Engineering Smart. Scaling Safe. Delivering Excellence.</div>
          <h1 className="hero-title">Innovative Process Engineering Solutions</h1>
          <p className="hero-subtitle">Expertise in Chemicals, Pharma & Oil & Gas Industries</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-outline">Get a Quote</Link>
            <Link to="/about" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
