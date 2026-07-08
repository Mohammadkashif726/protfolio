import React from "react";
import { FaArrowRight } from "react-icons/fa";
// import light from '../../../public/light-shop.png'
import "./Project.css";
import { PiWarningCircleBold } from "react-icons/pi";
function Project() {
  return (
    <div className="projects">
      <div className="project">
        <img src="/light-shop.png" alt="" />
        <div className="project-content">
          <div className="content-header">
            <span
              onClick={() =>
                window.open("https://km-light-shop.vercel.app/", "_blank")
              }
            >
              Ecommerce Website
            </span>
            <button>React.js</button>
          </div>
          <div className="content-desc">
            <span>
              KM Light Shop is a modern e-commerce website for browsing and
              purchasing lighting products. Built with React, it features a
              responsive user interface, product catalog, category filtering,
              shopping cart functionality, and a clean, user-friendly design
              optimized for both desktop and mobile devices.
            </span>
          </div>
          <div className="github-button">
            <span
              onClick={() =>
                window.open("https://github.com/Mohammadkashif726/KM-Light-Shop", "_blank")
              }
            >
              View Source Code
            </span>
            <FaArrowRight size={20} />
          </div>
        </div>
      </div>
      <div className="project">
        <img src="/fortunaze.png" alt="" />
        <div className="project-content">
          <div className="content-header">
            <span
              onClick={() =>
                window.open("https://www.fortunaze.com/", "_blank")
              }
            >
              Ecommerce Website
            </span>
            <button>Laravel</button>
          </div>
          <div className="content-desc">
            <span>
              Worked as a Laravel Developer on the backend development of Fortunaze, an e-commerce platform. Developed and maintained core business logic, implemented backend features, integrated APIs, optimized database queries, and collaborated with the team to deliver a secure and scalable application.
              </span>
          </div>
          <div className="github-button">
<PiWarningCircleBold size={20} />
            <span
              style={{color:'gray'}}
            >
              Confidential company code
            </span>
            
          </div>
        </div>
      </div>
      <div className="project">
        <img src="/plant.png" alt="" />
        <div className="project-content">
          <div className="content-header">
            <span
              onClick={() =>
                window.open("https://plant-website-hk2r.vercel.app/", "_blank")
              }
            >
              Plant Store Website
            </span>
            <button>React.js</button>
          </div>
          <div className="content-desc">
            <span>
              Plant Website – A personal frontend project showcasing a modern and responsive landing page for a plant store. Developed with a focus on clean UI/UX, responsive design, smooth animations, and an intuitive user experience.</span>
          </div>
          <div className="github-button">
            <span
              onClick={() =>
                window.open("https://github.com/Mohammadkashif726/Plant-Website", "_blank")
              }
            >
              View Source Code
            </span>
            <FaArrowRight size={20} />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Project;
