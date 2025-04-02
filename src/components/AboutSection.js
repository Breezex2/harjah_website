import React from "react";

const AboutSection = () => {
  return (
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
                barrier. Our vision is to empower businesses with seamless
                digital transformation through intuitive design, robust
                development, and strategic IT consulting. We strive to bridge
                the gap between ideas and execution, ensuring that every
                solution we deliver drives measurable growth and efficiency.
              </p>
              <h3>Team</h3>
              <p>
                We are a small but mighty team of two—skilled, passionate, and
                committed to building impactful digital solutions. With a blend
                of creativity, technical expertise, and problem-solving skills,
                we work closely with clients to transform their visions into
                reality. Our agility allows us to adapt quickly, innovate
                efficiently, and provide personalized attention to every project
                we undertake.
              </p>
              <h3>Why Us?</h3>
              <ul>
                <li>
                  <strong>Tailored Solutions</strong> – Every business is
                  unique, and so are our solutions. We take the time to
                  understand your needs and craft custom software that fits your
                  goals.
                </li>
                <li>
                  <strong>End-to-End Expertise</strong> – From design to
                  deployment, we handle the entire development lifecycle,
                  ensuring high-quality results.
                </li>
                <li>
                  <strong>Reliable & Scalable Technology</strong> – We use
                  modern technologies and best practices to build scalable and
                  future-proof digital products.
                </li>
                <li>
                  <strong>Commitment to Excellence</strong> – Despite being a
                  small team, we deliver with the efficiency and expertise of a
                  large-scale company while maintaining a personalized approach.
                </li>
              </ul>
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
  );
};

export default AboutSection;