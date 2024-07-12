import React, { useState } from "react";

import "./index.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };
  return (
    <div>
      <nav id="navbar">
        <img src="./Images/multimedia.png" alt="logo" className="logo" />
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#Home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#Video" onClick={toggleMenu}>
            Video
          </a>
          <a href="#Writing" onClick={toggleMenu}>
            Writing
          </a>
          <a href="#Podcast" onClick={toggleMenu}>
            Podcast
          </a>
          <a href="#Resume" onClick={toggleMenu}>
            Resume
          </a>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
