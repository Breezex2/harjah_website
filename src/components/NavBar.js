import React, { useState, useEffect } from "react";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-scroll";

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("English");
  const [activeLink, setActiveLink] = useState("home");

  const toggleLanguage = () => {
    const newLanguage = language === "English" ? "Arabic" : "English";
    setLanguage(newLanguage);

    // Update the page direction and language attribute
    document.documentElement.lang = newLanguage === "English" ? "en" : "ar";
    document.body.dir = newLanguage === "English" ? "ltr" : "rtl";
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="navbar" className={`navbar ${scrolled ? "sticky" : ""}`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="home" smooth spy duration={500}>
            <img src={Logo} alt="Logo" className="w-12 h-auto" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links flex items-center gap-8 text-white font-bold ml-auto list-none">
          {[
            { id: "home", label: language === "English" ? "Home" : "الرئيسية" },
            {
              id: "services",
              label: language === "English" ? "Services" : "الخدمات",
            },
            {
              id: "about",
              label: language === "English" ? "About Us" : "من نحن",
            },
            {
              id: "contact",
              label: language === "English" ? "Get in Touch" : "تواصل معنا",
            },
          ].map(({ id, label }) => (
            <li key={id} className={activeLink === id ? "active" : ""}>
              <Link
                to={id}
                smooth
                spy
                duration={500}
                className="navbar-link"
                style={{ textDecoration: "none", color: "white", cursor: "pointer" }}
                onClick={() => setActiveLink(id)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Switch */}
        <button
          onClick={toggleLanguage}
          className="language-switch text-white font-bold ml-4 px-4 py-2 bg-blue-500 rounded"
        >
          {language}
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
