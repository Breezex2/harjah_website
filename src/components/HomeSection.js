import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";
import homeImage from "../assets/img/desktop.avif"; // adjust the path as needed

const HomeSection = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x38c3b0,
          color2: 0xe4e4e6,
          backgroundColor: 0x29292f,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section id="home" ref={vantaRef} className="vanta-background">
      <div className="home-content-wrapper">
        <div className="home-container">
          {/* <div className="home-image">
            <img src={homeImage} alt="Home" className="home-img" />
          </div> */}
          <div className="home-content">
            <h1>Welcome to Harjah</h1>
            <p>We provide innovative solutions for your business needs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;