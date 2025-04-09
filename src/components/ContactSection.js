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
                {/* <a
                  href="https://maps.app.goo.gl/u4Ta3Kyhirgx4BDs8"
                  className="contact-item"
                >
                  <FaMapMarkerAlt />
                  <span>Our Office Location</span>
                </a> */}
              </div>
              <div className="contact-location">
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