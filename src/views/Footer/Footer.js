import React, { Suspense } from "react";
import { motion } from "framer-motion";
import "./Footer.css";

// Lazy load icons
const LazyIcon = React.lazy(() => import("./../LazyLoading/LazyIcon"));

const Footer = () => {
  return (
    <footer className="footer-container" id="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="footer-section about">
          <h2>About Truth Academy</h2>
          <p>
            Truth Academy is committed to empowering students with essential
            life skills and academic excellence. We believe in learning beyond
            books— nurturing talents, creativity, and confidence.
          </p>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>📞 +91 9344349083</p>
          <p>📧 truthacademychennai@gmail.com</p>
          <Suspense fallback={<div>Loading icons...</div>}>
            <div className="social-icons">
              <LazyIcon href="tel:+919344349083" icon="phone" label="Call" />
              <LazyIcon
                href="mailto:truthacademychennai@gmail.com

"
                icon="email"
                label="Email"
              />
              <LazyIcon
                href="https://wa.me/919344349083"
                icon="whatsapp"
                label="WhatsApp"
              />
              <LazyIcon
                href="https://www.instagram.com/truthacademy"
                icon="instagram"
                label="Instagram"
              />
              <LazyIcon
                href="https://www.facebook.com/truthacademy"
                icon="facebook"
                label="Facebook"
              />
              <LazyIcon
                href="https://x.com/truthacademy"
                icon="twitter"
                label="X"
              />
            </div>
          </Suspense>
        </div>

        <div className="footer-section address">
          <h2>Our Address</h2>
          <p>
            Truth Academy,
            <br />
            L-362, 15th Cross Street Thiruvalluvar Nagar,
            <br />
            Thiruvanmiyur, Chennai,
            <br />
            Tamil Nadu, India - 641001
          </p>
        </div>
      </motion.div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Truth Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
