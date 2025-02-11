import React from 'react';
import '../public/styles/commitment.css';


const Commitment = () => {
  return (
    <section className="commitment-section">
      <div className="commitment-content">
        <h2>Commitment to Justice</h2>
        <div className="commitment-grid">
          <div className="commitment-card">
            <h3>Ethical Practice</h3>
            <p>Strict adherence to legal ethics and professional standards</p>
          </div>
          <div className="commitment-card">
            <h3>Client Focus</h3>
            <p>Personalized attention to every case</p>
          </div>
        </div>
        <button className="cta-button">View Case Studies</button>
      </div>
      <img src="/images/dummy-image-3.jpg" alt="Courtroom" />
    </section>
  );
};

export default Commitment;