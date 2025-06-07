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
          <h1 className="founder-name">Oswald S. Sam Israel</h1>
          <h2 className="founder-role">
            Educator | Founder of Truth Academy | Visionary Leader
          </h2>
          <p className="founder-description">
            Oswald S. Sam Israel is a passionate educator and the founder of
            Truth Academy, a growing institution committed to fostering academic
            excellence and personal growth. His journey began at a renowned
            International School, where his experience as a teacher inspired a
            deeper calling—to create a learning environment rooted in purpose,
            integrity, and innovation.
            <br />
            <br />
            Motivated by a vision to transform education, Oswald established
            Truth Academy guided by the principle, “Learn life. Experience
            knowledge,” the academy was built not just to teach, but to
            inspire—helping students grow into thoughtful, capable individuals
            ready to meet the challenges of the real world.
          </p>

          {/* <ul className="founder-highlights">
            <li>📖 Ph.D. in Islamic Studies – Al-Azhar University</li>
            <li>🕌 20+ years of teaching & scholarly leadership</li>
            <li>✍️ Author of 10+ books on Islamic thought and social reform</li>
            <li>🌍 Speaker at various international Islamic conferences</li>
          </ul> */}

          <div className="founder-contact-info">
            <p>
              <FaEnvelope /> truthacademychennai@gmail.com
            </p>
            <p>
              <FaPhone /> +91 9344349083
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
