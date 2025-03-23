import React, { useState } from "react";
import "./App.css";

function Navbar() {
  const [language, setLanguage] = useState("en");

  // Function to scroll smoothly to a section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
    document.documentElement.lang = language === "en" ? "ar" : "en";
    document.body.dir = language === "en" ? "rtl" : "ltr";
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img
          src="\CompanyLogo.png"
          alt="Company Logo"
          className="logo"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <div className="nav-links">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("services")}>Services</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("contact")}>Get in touch</button>
      </div>
      <div
        className="language-switch"
        style={{
          display: "flex",
          justifyContent: language === "en" ? "flex-end" : "flex-start",
        }}
      >
        <button onClick={toggleLanguage} className="language-btn">
          {language === "en" ? "Arabic" : "English"}
        </button>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />

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
              barrier.
            </p>
            <p>
              Our vision is to empower businesses with seamless digital
              transformation through intuitive design, robust development, and
              strategic IT consulting.
            </p>
            <p>
              We strive to bridge the gap between ideas and execution, ensuring
              that every solution we deliver drives measurable growth and
              efficiency.
            </p>
            <h3>Team</h3>
            <p>
              We are a small but mighty team of two—skilled, passionate, and
              committed to building impactful digital solutions.
            </p>
            <p>
              With a blend of creativity, technical expertise, and
              problem-solving skills, we work closely with clients to transform
              their visions into reality. Our agility allows us to adapt
              quickly, innovate efficiently, and provide personalized attention
              to every project we undertake.
            </p>
            <h3>Why Us?</h3>
            <p>
              Tailored Solutions – Every business is unique, and so are our
              solutions. We take the time to understand your needs and craft
              custom software that fits your goals.
            </p>
            <p>
              End-to-End Expertise – From design to deployment, we handle the
              entire development lifecycle, ensuring high-quality results.
            </p>
            <p>
              Reliable & Scalable Technology – We use modern technologies and
              best practices to build scalable and future-proof digital
              products.
            </p>
            <p>
              Commitment to Excellence – Despite being a small team, we deliver
              with the efficiency and expertise of a large-scale company while
              maintaining a personalized approach.
            </p>
          </div>

          <div className="about-location">
            <h3>Location</h3>
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.3038236672093!2d58.18084011649614!3d23.57555594452228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de3a86ccefdd7%3A0x502673e3deffb381!2sHarjah%20for%20Software%20Development!5e1!3m2!1sen!2som!4v1742738980547!5m2!1sen!2som"
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
        <h2>Contact Us</h2>
        <div className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className="submit-btn">Send Message</button>
        </div>
      </section>
    </div>
  );
}

export default App;