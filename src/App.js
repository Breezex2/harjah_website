import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/NavBar"; // Ensure this path is correct
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css"; // Don't forget to import AOS styles

const App = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
    document.documentElement.lang = language === "en" ? "ar" : "en";
    document.body.dir = language === "en" ? "rtl" : "ltr";
  };

  return (
    <Router> {/* Wrap everything inside BrowserRouter */}
      <div className="App">
        <Navbar toggleLanguage={toggleLanguage} /> {/* Pass the function to Navbar */}

        <section id="home" className="section home-section">
          <video autoPlay loop muted className="background-video">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="home-content">
            <h1>Welcome to Our Company</h1>
            <p>We provide innovative solutions for your business needs</p>
          </div>
        </section>

        <section id="services" className="section services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Service 1</h3>
              <p>Description of service 1</p>
            </div>
            <div className="service-card">
              <h3>Service 2</h3>
              <p>Description of service 2</p>
            </div>
            <div className="service-card">
              <h3>Service 3</h3>
              <p>Description of service 3</p>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-details">
              <h3>Company Background</h3>
              <p>
                Founded in the heart of Muscat, Harjah is a dynamic software
                development company driven by a passion for technology and innovation.
              </p>
              <p>
                Established with the vision of transforming businesses through digital solutions, 
                we specialize in crafting cutting-edge websites, mobile applications, 
                and IT services tailored to meet modern market demands.
              </p>
              <h3>Our Vision</h3>
              <p>
                At Harjah, we believe technology should be an enabler, not a barrier.
              </p>
              <p>
                Our vision is to empower businesses with seamless digital transformation 
                through intuitive design, robust development, and strategic IT consulting.
              </p>
              <h3>Team</h3>
              <p>
                We are a small but mighty team of two—skilled, passionate, and
                committed to building impactful digital solutions.
              </p>
              <h3>Why Us?</h3>
              <p>
                Tailored Solutions – Every business is unique, and so are our solutions. 
                We take the time to understand your needs and craft custom software that fits your goals.
              </p>
              <p>
                End-to-End Expertise – From design to deployment, we handle the entire 
                development lifecycle, ensuring high-quality results.
              </p>
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

        <section id="contact" className="section contact-section">
          <div className="get-in-touch">
            <h2>Contact Us</h2>
          </div>

          <div className="contact-container">
            <div className="company-message">
              <h3>Company Message</h3>
              <p>
                We value your time and interest in our services. Please feel free to
                reach out with any questions or requests.
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
                <a href="https://maps.app.goo.gl/u4Ta3Kyhirgx4BDs8" className="contact-item">
                  <FaMapMarkerAlt />
                  <span>Our Office Location</span>
                </a>
              </div>
            </div>

            <div className="contact-form-box">
              <div className="contact-form">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Business Email" />
                <input type="text" placeholder="Phone Number" />
                <textarea placeholder="How can we help you?"></textarea>
                <button className="get-in-touch-btn">Get in Touch</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
};

export default App;
