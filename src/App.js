import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import webDevGif from "./assets/img/webDev.gif";
import mobileDevGif from "./assets/img/mobileDev.gif";
import uiDesignGif from "./assets/img/UI_design.gif";
import homeImage from "./assets/img/desktop.avif";

const App = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  const services = [
    {
      title: "Web Development",
      description:
        "Elevate your brand with high-performance, scalable websites and web applications. Seamless functionality, stunning design, and an exceptional user experience—all tailored to your business needs.",
      gif: webDevGif,
    },
    {
      title: "Mobile Development",
      description:
        "Power up your business with sleek, high-performing mobile apps for iOS and Android. Native and cross-platform solutions designed for speed, usability, and seamless interaction.",
      gif: mobileDevGif,
    },
    {
      title: "UI Design",
      description:
        "Captivate your audience with stunning, user-centric designs. Modern aesthetics, intuitive navigation, and seamless digital experiences that leave a lasting impression.",
      gif: uiDesignGif,
    },
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Home Section */}
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

        {/* Services Section */}
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

        {/* About Section */}
        <section id="about" className="section about-section">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-details">
              <h3>Company Background</h3>
              <p>
                Founded in the heart of Muscat, Harjah is a dynamic software
                development company driven by a passion for technology and
                innovation.
              </p>
              <p>
                Established with the vision of transforming businesses through
                digital solutions, we specialize in crafting cutting-edge
                websites, mobile applications, and IT services tailored to meet
                modern market demands.
              </p>
              <p>
                Our expertise spans across various industries, helping startups,
                enterprises, and individuals build digital experiences that are
                scalable, secure, and user-friendly.
              </p>
              <h3>Our Vision</h3>
              <p>
                At Harjah, we believe technology should be an enabler, not a
                barrier. Our vision is to empower businesses with seamless
                digital transformation through intuitive design, robust
                development, and strategic IT consulting. We strive to bridge
                the gap between ideas and execution, ensuring that every
                solution we deliver drives measurable growth and efficiency.
              </p>
              <h3>Team</h3>
              <p>
                We are a small but mighty team of two—skilled, passionate, and
                committed to building impactful digital solutions. With a blend
                of creativity, technical expertise, and problem-solving skills,
                we work closely with clients to transform their visions into
                reality. Our agility allows us to adapt quickly, innovate
                efficiently, and provide personalized attention to every project
                we undertake.
              </p>
              <h3>Why Us?</h3>
              <ul>
                <li>
                  <strong>Tailored Solutions</strong> – Every business is
                  unique, and so are our solutions. We take the time to
                  understand your needs and craft custom software that fits your
                  goals.
                </li>
                <li>
                  <strong>End-to-End Expertise</strong> – From design to
                  deployment, we handle the entire development lifecycle,
                  ensuring high-quality results.
                </li>
                <li>
                  <strong>Reliable & Scalable Technology</strong> – We use
                  modern technologies and best practices to build scalable and
                  future-proof digital products.
                </li>
                <li>
                  <strong>Commitment to Excellence</strong> – Despite being a
                  small team, we deliver with the efficiency and expertise of a
                  large-scale company while maintaining a personalized approach.
                </li>
              </ul>
            </div>
            <div className="about-location">
              <h3>Location</h3>
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.215169885484!2d58.17897327478673!3d23.575560895467117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de3a86ccefdd7%3A0x502673e3deffb381!2sHarjah%20for%20Software%20Development!5e1!3m2!1sen!2som!4v1742809788692!5m2!1sen!2som"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="get-in-touch">
            <h2>Contact Us</h2>
          </div>

          <div className="contact-container">
            <div className="company-message">
              <h3>Company Message</h3>
              <p>
                We value your time and interest in our services.
                <br /> Please feel free to reach out with any questions or
                requests.
              </p>
              <div className="social-icons">
                <a href="mailto:info@company.com" className="contact-item">
                  <FaEnvelope />
                  <span>info@company.com</span>
                </a>
                <a href="tel:+96897760250" className="contact-item">
                  <FaPhoneAlt />
                  <span>+968 97760250</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/u4Ta3Kyhirgx4BDs8"
                  className="contact-item"
                >
                  <FaMapMarkerAlt />
                  <span>Our Office Location</span>
                </a>
              </div>
            </div>
            <div className="contact-form-box">
              <form className="contact-form">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Business Email" />
                <textarea placeholder="How can we help you?"></textarea>
                <button className="get-in-touch-btn">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
};

export default App;
