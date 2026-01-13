import React from 'react';
import './AboutUsSection.css';
import engineerImg from '../assets/engineer_work.png';

const AboutUsSection = () => (
  <section className="about-us-home">
    <div className="about-us-container">
      <div className="about-us-image-wrap">
        <img src={engineerImg} alt="Engineers at Work" className="about-us-image" />
      </div>
      <div className="about-us-content">
        <h2 className="about-us-title">About Company</h2>
        <p className="about-us-desc">
          CPEC is a leading Process Engineering Consulting firm delivering innovative, efficient, and cost-optimized solutions for Chemical, Specialty Chemical, Pharmaceutical, and Oil & Gas industries. We combine deep engineering expertise with practical field experience to support clients across the complete project lifecycle.
        </p>
        
        <p className="about-us-desc">
          At CPEC (Chemical Process Engineering Consultants), we transform complex chemical processes into scalable, safe, and profitable plants. With 8+ years of industrial experience in process design, simulation, and plant optimization, we deliver solutions that balance:
        </p>
        <ul className="about-us-list">
          <li>High performance</li>
          <li>Operational safety</li>
          <li>Energy efficiency</li>
          <li>Capital & operating cost reduction</li>
        </ul>
        <p className="about-us-desc">
          From feasibility studies to detailed engineering and simulation our designs are grounded in real plant behaviour, not just theory.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUsSection;
