import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  const missionPoints = [
    'Deliver practical and optimized process engineering solutions',
    'Integrate digital simulations for higher reliability',
    'Support industries to scale safely and operate efficiently',
    'Build long-term engineering partnerships'
  ];

  return (
    <section className="vision-mission">
      <div className="vm-container">
        <div className="vision-section">
          <h2 className="vm-title">Vision</h2>
          <p className="vm-text">
            To become India's most trusted chemical process design & plant optimization partner, empowering industries with safe, sustainable, and economically superior engineering solutions.
          </p>
        </div>
        <div className="mission-section">
          <h2 className="vm-title">Mission</h2>
          <ul className="mission-list">
            {missionPoints.map((point, index) => (
              <li key={index} className="mission-item">
                <span className="mission-check">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
