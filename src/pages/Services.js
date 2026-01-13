import React from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <section className="services-section">
        <div className="services-container">
          <div className="services-content">
            <h1 className="services-title">Our Expertise</h1>
            
            <p className="services-intro">
              At CPEC, expertise isn't theoretical—it's engineered, tested, and proven on real plants. We deliver end-to-end process engineering capabilities designed to elevate performance, improve safety, and unlock operational efficiency across complex industrial systems.
            </p>

            <div className="expertise-section">
              <h2 className="expertise-section-title">Process Design & Engineering</h2>
              <p className="expertise-section-desc">
                We architect robust, scalable, and regulation-ready process designs that form the backbone of reliable manufacturing operations:
              </p>
              <ul className="expertise-list">
                <li>Development of Process Flow Diagrams (PFDs) and detailed Piping & Instrumentation Diagrams (P&IDs)</li>
                <li>Mass and Energy Balance development grounded in actual operating conditions</li>
                <li>Control valve and PSV sizing for precision control and compliant pressure protection</li>
                <li>Utility system engineering including steam, cooling water, compressed air, nitrogen, and integrated plant services</li>
                <li>Advanced reaction system design, covering chlorination, hydrogenation, absorption, and scrubbing systems</li>
              </ul>
            </div>

            <div className="expertise-section">
              <h2 className="expertise-section-title">Process Simulation & Equipment Engineering</h2>
              <p className="expertise-section-desc">
                We turn data into decisions using industry-leading simulation and equipment analysis tools:
              </p>
              <ul className="expertise-list">
                <li>High-fidelity Aspen Plus and Aspen HYSYS modeling</li>
                <li>Equipment rating and performance validation</li>
                <li>Heat exchanger design and thermal performance optimization</li>
                <li>Hydraulic calculations and pressure drop analysis for pipelines and networks</li>
                <li>Distillation and column design, including internals and efficiency optimization</li>
                <li>Emergency relief device sizing aligned with international safety standards</li>
                <li>Solid handling system design for stable, safe, and efficient material flow</li>
              </ul>
            </div>

            <div className="expertise-section">
              <h2 className="expertise-section-title">Plant Optimization & Operational Excellence</h2>
              <p className="expertise-section-desc">
                We identify hidden inefficiencies and convert them into measurable gains:
              </p>
              <ul className="expertise-list">
                <li>Energy reduction and heat integration strategies</li>
                <li>Yield and throughput enhancement</li>
                <li>Debottlenecking of process and utility constraints</li>
                <li>Safety, operability, and reliability improvements</li>
                <li>Advanced process troubleshooting to resolve chronic plant issues and stabilize operations</li>
              </ul>
            </div>

            <div className="cpec-advantage">
              <h2 className="advantage-title">The CPEC Advantage</h2>
              <p className="advantage-text">
                Every solution we deliver is engineered with one objective:<br />
                <strong>to make your plant safer, leaner, and relentlessly efficient.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
