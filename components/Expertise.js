import React from 'react';
import '../public/styles/expertise.css';

const Expertise = () => {
  return (
    <section className="expertise-section">
      <div className="expertise-content">
        <h2>Renowned for Expertise</h2>
        <p>Our Senior Criminal Advocate is widely recognized as an authority in criminal law with a deep understanding of the legal system.</p>
        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>Case Analysis</h3>
            <p>Comprehensive legal strategy development.</p>
          </div>
          <div className="expertise-card">
            <h3>Client Advocacy</h3>
            <p>Dedicated representation in all proceedings.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;