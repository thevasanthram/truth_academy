import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTwitter, // <-- use this instead of FaXTwitter
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const iconMap = {
  whatsapp: <FaWhatsapp />,
  instagram: <FaInstagram />,
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  phone: <FaPhoneAlt />,
  email: <FaEnvelope />,
};

const LazyIcon = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target={
        href.startsWith("mailto:") || href.startsWith("tel:")
          ? "_self"
          : "_blank"
      }
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        color: "#00bcd4",
        fontSize: "1.4rem",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {iconMap[icon]}
    </a>
  );
};

export default LazyIcon;
