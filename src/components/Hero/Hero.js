import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom'


function Hero() {
  const navigate = useNavigate()
  return (
    <div className='hero'>
        <div className='hero-container'>

        <span>Mohammad Kashif</span>
        <span>I'm a professional Website Developer from karachi</span>
        <button onClick={()=> navigate("/about")}>About Me</button>
        </div>
    </div>
  )
}

export default Hero