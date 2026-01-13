import React from 'react';
import './WhyChooseCPEC.css';

const WhyChooseCPEC = () => {
  const reasons = [
    'Industry-tested engineering judgment',
    'Digital tools-driven accuracy',
    'Cost-efficient & safe designs',
    'Support beyond design — into execution',
    'Fast turnaround for critical calculations and system sizing'
  ];

  return (
    <section className="why-choose">
      <div className="why-choose-container">
        <h2 className="why-choose-title">Why Choose CPEC</h2>
        <div className="why-choose-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="why-choose-card">
              <div className="why-choose-number">{index + 1}</div>
              <p className="why-choose-text">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCPEC;
