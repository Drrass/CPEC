import React from 'react';
import './Industries.css';

const industries = [
  {
    name: 'Bulk & Specialty Chemicals',
    description:
      'Complete process engineering solutions for large-scale and specialty chemical manufacturing. Efficiency, reliability, and compliance at every step.',
  },
  {
    name: 'Fine Chemicals',
    description:
      'High-purity, complex synthesis processes with a focus on quality, yield, and operational safety—engineered for performance and scale.',
  },
  {
    name: 'APIs & Pharmaceutical Manufacturing',
    description:
      'From API synthesis to final product, we design GMP-ready, regulatory-compliant and cost-efficient pharma processes that scale safely.',
  },
  {
    name: 'Petrochemical & Refining',
    description:
      'End-to-end engineering for refinery operations, petrochemicals, and advanced process units—tailored for energy and yield optimization.',
  },
  {
    name: 'Oil & Gas Processing',
    description:
      'Plant design, utility systems, and process simulation for upstream, midstream, and downstream requirements; risk, safety, and productivity in harmony.',
  },
  {
    name: 'Industrial Scrubbing & Gas Treatment',
    description:
      'Design and optimization for pollution control: scrubbing, halogenation, gas purification, and advanced emission systems.',
  },
  {
    name: 'Hydrogenation & High-Pressure Reactions',
    description:
      'Specialized in safe, efficient hydrogenation, high-pressure and catalytic systems—backed by years of successful plant delivery.',
  },
  {
    name: 'Chlorination & Halogenation Plants',
    description:
      'Custom-engineered plants for challenging halogen, chlorine, and allied chemistries. Modern safety and process control at core.',
  },
];

const Industries = () => {
  return (
    <section className="industries industries-professional">
      <div className="industries-background">
        <div className="industries-overlay"></div>
      </div>
      <div className="industries-container">
        <h2 className="industries-title">Industries We Serve</h2>
        <p className="industries-lead">
          We proudly serve a diverse set of industries with tailored process design, scale-up, and operational optimization, always focused on safety, efficiency, and reliability.
        </p>
        <div className="industries-professional-grid">
          {industries.map((industry, idx) => (
            <div key={industry.name} className="industry-pro-card">
              <div className="industry-pro-title">{industry.name}</div>
              <div className="industry-pro-desc">{industry.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
