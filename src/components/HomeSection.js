import React from "react";
import homeImage from "../assets/img/desktop.avif"; // Update the path to reflect the correct location

const HomeSection = () => {
  return (
    <section id="home" className="section home-section">
      <video autoPlay loop muted className="background-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="home-container">
        <div className="home-image">
          <img src={homeImage} alt="Home" className="home-img" />
        </div>
        <div className="home-content">
          <h1>Welcome to Harjah</h1>
          <p>We provide innovative solutions for your business needs</p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;