import React from 'react'
import './Footer.css'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
        <div className='copyright'>
            <span>Copyright <span className='copyright-name'>Kashif</span> All Rights Reserved</span>
        </div>
        <div className='footer-icons'>
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

export default Footer