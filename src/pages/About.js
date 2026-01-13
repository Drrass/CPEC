import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h1 className="about-title">About Us</h1>
            
            <p className="about-text">
              CPEC is a next-generation Process Engineering Consulting powerhouse, built to engineer clarity out of complexity. We specialize in delivering high-impact, cost-intelligent, and future-ready solutions for the Chemical, Specialty Chemical, Pharmaceutical, and Oil & Gas industries.
            </p>

            <p className="about-text">
              At our core, we don't just design processes — we engineer performance.
            </p>

            <p className="about-text">
              Backed by 8+ years of hands-on industrial expertise, our team blends deep process engineering fundamentals with real-world plant exposure. This allows us to convert ambitious ideas into scalable, safe, and commercially viable production facilities that work seamlessly beyond paper and simulation screens.
            </p>

            <h2 className="about-subtitle">What Sets Us Apart</h2>

            <p className="about-text">
              At Chemical Process Engineering Consultants (CPEC), every solution is engineered to strike the perfect balance between:
            </p>

            <ul className="about-list">
              <li>Relentless process performance</li>
              <li>Uncompromised operational safety</li>
              <li>Maximum energy and resource efficiency</li>
              <li>Aggressive reduction of CAPEX and OPEX</li>
            </ul>

            <p className="about-text">
              Our approach is practical, data-driven, and execution-focused. From conceptual feasibility studies and process simulations to detailed engineering and plant optimization, our designs are rooted in actual plant behavior, not academic assumptions.
            </p>

            <h2 className="about-subtitle">Engineering with Intent</h2>

            <p className="about-text">
              We work across the entire project lifecycle, partnering with clients to de-risk decisions, optimize throughput, and unlock sustainable value. Every flow diagram, every calculation, and every recommendation is crafted with one goal in mind:
            </p>

            <p className="about-text about-highlight">
              To build plants that run smarter, safer, and more profitably—day after day.
            </p>

            <p className="about-text">
              CPEC stands at the intersection of engineering precision and industrial realism, helping businesses move faster, operate leaner, and scale with confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
