import React from 'react';
import './WhatWeDeliver.css';

const WhatWeDeliver = () => {
  const deliverables = [
    'Build-ready engineering packages',
    'Accurate equipment sizing',
    'Optimized reaction and separation systems',
    'Cooling & utility load estimations',
    'Safety design calculations',
    'Start-up & scale-up support'
  ];

  return (
    <section className="what-we-deliver">
      <div className="deliver-container">
        <h2 className="deliver-title">What We Deliver</h2>
        <div className="deliver-grid">
          {deliverables.map((item, index) => (
            <div key={index} className="deliver-item">
              <div className="deliver-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="deliver-text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliver;
