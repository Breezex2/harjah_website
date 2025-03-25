import React, { useState, useEffect } from "react";
import Logo from "../assets/img/CompanyLogo.png";
import { Link } from "react-scroll";

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    document.documentElement.lang = newLanguage;
    document.body.dir = newLanguage === "en" ? "ltr" : "rtl";
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="nav-logo">
          <img src={Logo} alt="Logo" className="w-12 h-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="nav-links flex items-center gap-8 text-white text-lg ml-auto">
          {[{ id: "home", label: "Home" }, { id: "services", label: "Services" }, { id: "about", label: "About Us" }, { id: "contact", label: "Get in Touch" }].map(
            ({ id, label }) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth
                  spy
                  duration={500}
                  className={`navbar-link ${activeLink === id ? "active" : ""}`}
                  onClick={() => onUpdateActiveLink(id)}
                >
                  {label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Language Toggle Button */}
        <div className="navbar-text flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-white border-2 border-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition"
          >
            {language === "en" ? "Arabic" : "English"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;