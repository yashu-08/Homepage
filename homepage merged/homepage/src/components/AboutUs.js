import React from 'react';
import './AboutUs.css'; // Import the CSS file
import aboutUsImage from '../assets/AboutUs.jpeg'; // Ensure the correct image path

function AboutUs() {
  return (
    <div className="about-container">
      <div className="content">
        <h3 className="about-title">About Us</h3>
        <h1 className="main-title">EduTechSolution: An E-Learning Service to Help You Grow</h1>
        <p className="description">
          EduTech solution is expected to become a valuable service for the future in the field of education.
        </p>
      </div>
      <div className="image-container">
        <img src={aboutUsImage} alt="About Us" className="about-image" />
      </div>
    </div>
  );
}

export default AboutUs;