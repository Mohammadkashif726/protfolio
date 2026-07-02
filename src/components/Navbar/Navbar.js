import React from 'react'
import './Navbar.css'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <span>Kashif</span>
      </div>
      <div className='navbar-center'>
        <ul>
          <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/resume">Resume</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/pages">Pages</Link></li>
        </ul>
      </div>
      <div className='navbar-right'>
        <a href="https://github.com/Mohammadkashif726" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>

      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>

      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>

      <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>

      </div>
    </div>
  )
}

export default Navbar