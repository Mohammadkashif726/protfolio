import React, { useState, useEffect } from 'react';
import './Navbar.css';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu whenever route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Link to="/" onClick={closeMenu} style={{textDecoration:'none', color:'inherit'}}>
          <span>Kashif</span>
        </Link>
      </div>

      <div className="navbar-center">
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/resume" onClick={closeMenu}>Resume</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className='navbar-right'>
        <a href="https://github.com/Mohammadkashif726" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mohammad-kashif-89477016a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/kashifmohammad726?igsh=MTZ1MmI1ZWk1MnlnYw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/share/18saqYB8zK/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;