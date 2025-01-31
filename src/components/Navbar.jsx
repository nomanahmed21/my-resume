import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {  // Remove re-declaration of darkMode
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-container">
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            ☰
          </button>
        <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
          <li><Link to="/" onClick={toggleMobileMenu}>Profile</Link></li>
          <li><Link to="/skills" onClick={toggleMobileMenu}>Skills</Link></li>
          <li><Link to="/projects" onClick={toggleMobileMenu}>Projects</Link></li>
        </ul>
        <div className='navbar-buttons'>
          <button className="dark-mode-btn" onClick={toggleDarkMode}>
            {darkMode ? '🌞' : '🌙'}
          </button>
          <a href="mailto:your-email@example.com" className="contact-btn">
            📩 Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
