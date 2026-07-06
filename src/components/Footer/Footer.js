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
            
                  <a href="https://www.linkedin.com/in/mohammad-kashif-89477016a" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
            
                  <a href="https://www.instagram.com/kashifmohammad726?igsh=MTZ1MmI1ZWk1MnlnYw==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
            
                  <a href="https://www.facebook.com/share/18saqYB8zK/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
        </div>
    </div>
  )
}

export default Footer