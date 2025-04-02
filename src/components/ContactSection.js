import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;