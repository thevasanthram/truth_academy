import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import TruthAcademyLogo from "./../../images/logos/Truth Academy Logo.png";

const navBarDivisions = {
  Courses: {
    Education: {
      "CBSE Tuition": {},
      "State Board Tuition": {},
      "Spoken English": {},
    },
    "Music Classes": {
      "Keyboard & Guitar": {},
      "Carnatic Vocal Classes": {},
    },
    "Video Editing": {
      "Final Cut Pro": {},
    },
  },
  Registration: {
    "Course Registration": {},
  },
  "About Us": {
    Founder: {},
    // Team: {},
  },
};

const toSlug = (label) => `/${label.toLowerCase().replace(/\s+/g, "-")}`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerMenu = useRef(null);
  const [openMenus, setOpenMenus] = useState({});
  const [dropdownPositions, setDropdownPositions] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        hamburgerMenu.current &&
        !hamburgerMenu.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleHamburger = () => {
    setIsMenuOpen((prev) => !prev);
    if (!isMenuOpen) setOpenMenus({}); // close all on open
  };

  const toggleMenu = (path) => {
    setOpenMenus((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const renderMobileMenu = (menu, parentPath = "") => (
    <ul className="v-header-mobile-menu">
      {Object.entries(menu).map(([label, children]) => {
        const path = parentPath + label;
        const isLeaf = Object.keys(children).length === 0;
        const isOpen = openMenus[path];

        return (
          <li key={path} className="v-header-mobile-item">
            {isLeaf ? (
              <a href={toSlug(label)} className="v-header-link">
                {label}
              </a>
            ) : (
              <>
                <div
                  className="v-header-toggle-label"
                  onClick={() => toggleMenu(path)}
                >
                  {label} <span>{isOpen ? "▲" : "▼"}</span>
                </div>
                {isOpen && renderMobileMenu(children, path)}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );

  const checkDropdownOverflow = () => {
    const dropdownElements = document.querySelectorAll(
      ".v-header-dropdown-submenu"
    );
    const windowWidth = window.innerWidth;

    dropdownElements.forEach((dropdown) => {
      const rect = dropdown.getBoundingClientRect();
      if (rect.right > windowWidth) {
        dropdown.classList.add("align-left");
      } else {
        dropdown.classList.remove("align-left");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("resize", checkDropdownOverflow);
    checkDropdownOverflow(); // Initial check on mount

    return () => {
      window.removeEventListener("resize", checkDropdownOverflow);
    };
  }, []);

  return (
    <header className="v-header-container">
      <div className="v-header-logo-section" onClick={() => navigate("/")}>
        <div className="v-header-logo-link">
          <img
            src={TruthAcademyLogo}
            alt="Institute Logo"
            className="v-header-logo"
          />
        </div>
        <div className="v-header-text">
          <span className="v-header-institute-name">Truth Academy</span>
          <span className="v-header-slogan">SCHOOL OF KNOWLEDGE</span>
        </div>
      </div>

      <div
        className={`v-header-nav-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleHamburger}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav
        className={`v-header-nav-section ${isMenuOpen ? "show" : ""}`}
        aria-label="Main Navigation"
        ref={hamburgerMenu}
      >
        {renderMobileMenu(navBarDivisions)}
      </nav>

      {/* Desktop Navbar (unchanged) */}
      {/* <nav className="v-header-desktop-nav" aria-label="Desktop Navigation">
        <ul className="v-header-nav-menu">
          {Object.entries(navBarDivisions).map(([mainKey, subMenu]) => (
            <li key={mainKey} className="v-header-nav-item">
              <span className="v-header-menu-label">{mainKey}</span>
              <ul className="v-header-dropdown-menu">
                {Object.entries(subMenu).map(([subKey, subSub]) => {
                  const isLeaf = Object.keys(subSub).length === 0;
                  return (
                    <li key={subKey} className="v-header-submenu-item">
                      {isLeaf ? (
                        <a href={toSlug(subKey)}>{subKey}</a>
                      ) : (
                        <span className="v-header-menu-label">{subKey}</span>
                      )}
                      {!isLeaf && (
                        <ul className="v-header-dropdown-submenu">
                          {Object.entries(subSub).map(([leaf]) => (
                            <li key={leaf}>
                              <a href={toSlug(leaf)}>{leaf}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav> */}

      <nav className="v-header-desktop-nav" aria-label="Desktop Navigation">
        <ul className="v-header-nav-menu">
          {Object.entries(navBarDivisions).map(([mainKey, subMenu]) => (
            <li key={mainKey} className="v-header-nav-item">
              <span className="v-header-menu-label">{mainKey}</span>
              <ul className="v-header-dropdown-menu">
                {Object.entries(subMenu).map(([subKey, subSub]) => {
                  const isLeaf = Object.keys(subSub).length === 0;
                  return (
                    <li key={subKey} className="v-header-submenu-item">
                      {isLeaf ? (
                        <Link
                          to={toSlug(subKey)}
                          className="v-header-suboption-link"
                        >
                          {subKey}
                        </Link>
                      ) : (
                        <span className="v-header-menu-label v-header-suboption-label">
                          {subKey}
                        </span>
                      )}
                      {!isLeaf && (
                        <ul className="v-header-dropdown-submenu">
                          {Object.entries(subSub).map(([leaf]) => (
                            <li key={leaf}>
                              <Link to={toSlug(leaf)}>{leaf}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
