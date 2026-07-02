import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <div className="resume-header">
        <span>Resume</span>
      </div>
      <div className="resume-section">
        <div className="resume-column">
          <h3 className="resume-title">Summary</h3>

          <div className="resume-item">
            <h4>Mohammad Kashif</h4>

            <p className="italic">
              Innovative and deadline-driven Full Stack Web Developer having
              expertise in PHP Laravel for Backend and React.js for Frontend...
            </p>

            <ul>
              <li>Karachi, Pakistan</li>
              <li>(+92) 335-1801680</li>
              <li>kashifmohammad726@yahoo.com</li>
            </ul>
          </div>
          <h3 className="resume-title">Education</h3>

          <div className="resume-item">
            <h4>Masters in Petroleum Technology</h4>
            <h4>2017-2021</h4>
            <h4>University of Karachi</h4>
            <p className="italic">
              Completed a Master's in Petroleum Technology from the University
              of Karachi (2017–2021). During my academic journey, I developed
              strong analytical, problem-solving, and research skills. Alongside
              my studies, I pursued my passion for software development and
              gained expertise in PHP, Laravel, React.js, JavaScript, and modern
              web technologies, transitioning into a career as a Full Stack Web
              Developer.
            </p>
          </div>
        </div>
        <div className="resume-column">
            <h3 className="resume-title">Professional Experience</h3>

    <div className="resume-item">
        <h4>Reporteq</h4>
        <h4>Nov 2024-Oct 2025</h4>
        <h4>Full Stack Developer</h4>
        <p className="italic">
Worked as a Full Stack Developer at Reporteq, contributing to the development and maintenance of TrueXcellence, a medical staffing platform. Developed scalable web applications using Laravel for the backend and React.js for the frontend, implementing new features, integrating APIs, optimizing application performance, and collaborating with cross-functional teams to deliver reliable and user-friendly solutions.        </p>

    </div>
    <div className="resume-item">
        <h4>Vital Analytics Software House</h4>
        <h4>Feb 2023-August 2025</h4>
        <h4>Full Stack Developer</h4>
        <p className="italic">
Worked as a Full Stack Developer at Vital Analytics, contributing to the development and maintenance of an HR Portal System using Laravel and React.js. Designed intuitive user interfaces and workflows using Figma, collaborated with cross-functional teams to deliver user-centric solutions, and performed automated software testing using Selenium to ensure application quality, reliability, and performance.</p>

    </div>
    <div className="resume-item">
        <h4>Blue Hat WebSolutions</h4>
        <h4>Nov 2021-Feb 2022</h4>
        <h4>Backend Developer - Laravel</h4>
        <p className="italic">
Worked as a Laravel Developer at BlueHat Web Solutions, specializing in backend development for e-commerce applications. Played a key role in developing the backend of Fortunaze.com using Laravel, where I designed and implemented core business logic, RESTful APIs, database architecture, authentication, order management, and other essential e-commerce functionalities while ensuring application performance, security, and scalability.</p>

    </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
