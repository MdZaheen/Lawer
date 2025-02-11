import React from 'react';
import '../public/styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Practice Areas</h4>
          <ul>
            <li><a href="#white-collar">White-Collar Crimes</a></li>
            <li><a href="#violent">Violent Offenses</a></li>
            <li><a href="#drug">Drug-Related Matters</a></li>
            <li><a href="#appeals">Appeals</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#linkedin">LinkedIn</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
            <a href="#facebook">Facebook</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2025 Juris Advocate, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;