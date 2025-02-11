import React from 'react';
import '../public/styles/header.css';

const Header = () => {

  return (
    <header className="header">
      <div className="logo">Juris Advocate</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#faq">FAQ</a>
      </nav>
    </header>
);
};

export default Header;