import React from 'react';
import '../public/styles/trackRecord.css';

const TrackRecord = () => {
  return (
    <section className="track-record">
      <div className="content-wrapper">
        <h2>Proven Track Record</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>12+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h3>95%</h3>
            <p>Case Success Rate</p>
          </div>
          <div className="stat-card">
            <h3>500+</h3>
            <p>Cases Handled</p>
          </div>
        </div>
        <img src="/images/dummy-image-2.jpg" alt="Legal Documents" />
      </div>
    </section>
  );
};

export default TrackRecord;