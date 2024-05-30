
import React from 'react';
import '../components/style.css'; 

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">Portfolio</a>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#projects">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
