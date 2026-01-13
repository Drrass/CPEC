import React from 'react';
import './Services.css';

const Services = () => {
  const expertise = [
    {
      category: 'Process Design & Engineering',
      items: [
        'Process Flow Diagrams (PFD)',
        'P&ID Development',
        'Mass & Energy Balance',
        'Control Valve & PSV Sizing',
        'Utility System Design (Steam, Cooling Water, Compressed Air, Nitrogen, etc.)',
        'Reaction System Design (including chlorination, hydrogenation, scrubbing systems)'
      ]
    },
    {
      category: 'Simulation',
      items: [
        'Aspen Plus / HYSYS Process Modelling',
        'Equipment rating',
        'Heat exchanger design',
        'Hydraulic calculations & pressure drop analysis',
        'Column design',
        'Emergency relief device sizing',
        'Solid handling system'
      ]
    },
    {
      category: 'Plant Optimization',
      items: [
        'Energy reduction strategies',
        'Yield improvement',
        'Bottleneck removal',
        'Safety & reliability enhancement',
        'Process troubleshooting'
      ]
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Expertise</h2>
          <p className="services-subtitle">We specialize in:</p>
        </div>
        <div className="expertise-grid">
          {expertise.map((section, index) => (
            <div key={index} className="expertise-card">
              <h3 className="expertise-category">{section.category}</h3>
              <ul className="expertise-list">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
