import React from "react";
import logo from "../assets/img/logo.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Company Logo" />
        <ul className="social-contact-icons">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f icon"></i>
            </a>
          </li>
          <li>
            <a href="https://X.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x icon"></i>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in icon"></i>
            </a>
          </li>
          <li>
            <a
              href="https://plus.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google-plus-g icon"></i>
            </a>
          </li>
        </ul>
      <hr class="mb-7" />
      <div class="text-center p-3 border-top border-white">
      © 2024 Copyright:  
      <a class="text-white" href="https://harjah.com/">Harjah.com</a>
      </div>
      </div>
    </footer>
  );
};
