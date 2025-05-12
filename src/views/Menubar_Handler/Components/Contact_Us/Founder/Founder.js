import React from "react";
import "./Founder.css";
import founderImg from "./../../../../../images/FounderImage.jpeg";

import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

const Founder = () => {
  return (
    <section className="founder-section" id="founder">
      <div className="founder-container">
        <div className="founder-image-card">
          <img
            src={founderImg}
            alt="Founder of Truth Academy - Dr. A. K. Moideen"
            className="founder-image"
          />
        </div>
        <div className="founder-details">
          <h1 className="founder-name">Sam</h1>
          <h2 className="founder-role">Founder & President, Truth Academy</h2>
          <p className="founder-description">
            Dr. A. K. Moideen is a distinguished Islamic scholar and
            educationalist with over 20 years of experience in academic
            leadership and spiritual guidance. A Ph.D. graduate from Al-Azhar
            University, Cairo, his lifelong mission has been to integrate
            traditional Islamic knowledge with modern educational frameworks.
            Under his visionary leadership, Truth Academy has become a beacon
            for moral development and intellectual excellence.
          </p>

          <ul className="founder-highlights">
            <li>📖 Ph.D. in Islamic Studies – Al-Azhar University</li>
            <li>🕌 20+ years of teaching & scholarly leadership</li>
            <li>✍️ Author of 10+ books on Islamic thought and social reform</li>
            <li>🌍 Speaker at various international Islamic conferences</li>
          </ul>

          <div className="founder-contact-info">
            <p>
              <FaEnvelope /> truthacademychennai@gmail.com
            </p>
            <p>
              <FaPhone /> +91 98765 43210
            </p>
          </div>

          <div className="founder-social-icons">
            <a
              href="https://instagram.com/truthacademy"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/truthacademy"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/truthacademy"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://linkedin.com/company/truthacademy"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com/@truthacademy"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
