import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "../assets/img/CompanyLogo.png";

function NavbarComponent() {
  const [language, setLanguage] = useState("en");
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
    document.documentElement.lang = language === "en" ? "ar" : "en";
    document.body.dir = language === "en" ? "rtl" : "ltr";
  };

  return (
    <Navbar expand="md" fixed="top" className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="Company Logo" style={{ width: "50px", height: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? "show" : ""}>
          <Nav className="ms-auto">
            {["home", "services", "about", "contact"].map((section) => (
              <Nav.Link
                key={section}
                as={Link}
                to={section}
                smooth
                spy
                duration={500}
                className={`navbar-link ${activeLink === section ? "active" : ""}`}
                onClick={() => setActiveLink(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <button onClick={toggleLanguage} className="language-btn">
              {language === "en" ? "Arabic" : "English"}
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
