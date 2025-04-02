import React, { useState } from "react";
import webDevGif from "../assets/img/webDev.gif";
import mobileDevGif from "../assets/img/mobileDev.gif";
import uiDesignGif from "../assets/img/UI_design.gif";

const services = [
  {
    title: "Web Development",
    description:
      "Elevate your brand with high-performance, scalable websites and web applications.",
    gif: webDevGif,
  },
  {
    title: "Mobile Development",
    description:
      "Power up your business with sleek, high-performing mobile apps for iOS and Android.",
    gif: mobileDevGif,
  },
  {
    title: "UI Design",
    description:
      "Captivate your audience with stunning, user-centric designs.",
    gif: uiDesignGif,
  },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="section services-section">
    <h2>Our Services</h2>
    <div className="services-grid">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-wrapper"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="service-card">
            <img
              src={service.gif}
              alt={service.title}
              className="service-gif"
            />
            <h3>{service.title}</h3>
          </div>
          <div
            className={`service-description ${
              hoveredIndex === index ? "visible" : ""
            }`}
          >
            <p>{service.description}</p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default ServicesSection;