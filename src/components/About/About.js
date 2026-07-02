import React from 'react'
import './About.css'
import { RiArrowRightSLine } from 'react-icons/ri'
// import Img from '../../../public/kashif.jpeg'

function About() {
const skills = [
  { name: "HTML", percent: 100 },
  { name: "CSS", percent: 95 },
  { name: "JavaScript", percent: 90 },
  { name: "React.js", percent: 90 },
  { name: "PHP", percent: 95 },
  { name: "Laravel", percent: 95 },
];
    return (
    <div className='about'>
        <div className='about-header'>
            <span>About</span>
            <span>I am a Full Stack (PHP/Laravel and React.js) Developer.</span>
        </div>
        <div className='about-content'>
            <div className='about-content-left'>
                <img src="/kashif.jpeg" className='about-image' />
            </div>
            <div className='about-content-right'>
                <span>Full Stack Website Developer</span>
                <div className='right-items'>
                    <div className='right-item'>
                        <RiArrowRightSLine size={25} color='grey'/>
                        <span>Birthday:</span>
                        <span>28 December 1997</span>
                    </div>
                    <div className='right-item'>
                        <RiArrowRightSLine size={25} color='grey'/>
                        <span>AGE:</span>
                        <span>29</span>
                    </div>
                    <div className='right-item'>
                        <RiArrowRightSLine size={25} color='grey'/>
                        <span>Degree:</span>
                        <span>Master</span>
                    </div>
                    <div className='right-item'>
                        <RiArrowRightSLine size={25} color='grey'/>
                        <span>Phone:</span>
                        <span>+923351801680</span>
                    </div>
                    <div className='right-item'>
                        <RiArrowRightSLine size={25} color='grey'/>
                        <span>City:</span>
                        <span>Karachi</span>
                    </div>
                    <div className='right-item'>
                        <RiArrowRightSLine size={25} color='grey'/>
                        <span>Email:</span>
                        <span>kashifmohammad726@yahoo.com</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='about-skills'>
            <span>Skills</span>
            <span>I have expertise in the following skills.</span>
        </div>
        <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default About