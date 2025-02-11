import React from 'react';
import '../public/styles/reputation.css';

const Reputation = () => {
  return (
    <section className="reputation-section">
      <div className="reputation-content">
        <h2>A Reputation for Excellence</h2>
        <div className="practice-areas">
          <div className="area-card">
            <h3>White-Collar Crimes</h3>
            <p>Fraud, embezzlement, and financial crimes defense</p>
          </div>
          <div className="area-card">
            <h3>Violent Offenses</h3>
            <p>Assault, homicide, and domestic violence cases</p>
          </div>
          <div className="area-card">
            <h3>Drug-Related Matters</h3>
            <p>Possession, trafficking, and distribution cases</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reputation;