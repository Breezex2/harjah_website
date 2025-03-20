import React from "react";
import "./App.css";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="\CompanyLogo.png" alt="Company Logo" className="logo" style={{ width: "50px", height: "50px" }} />
      </div>
      <div className="nav-links">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("services")}>Services</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("contact")}>Contact Us</button>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home" className="section home-section">
        {/* Add the video element */}
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
        <p>
          We are a dedicated team committed to delivering excellence in
          everything we do.
        </p>
        <p>
          Our mission is to help businesses grow and succeed through innovative
          solutions.
        </p>
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