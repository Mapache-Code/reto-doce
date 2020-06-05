import React from "react";

import "./styles/Footer.css";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img width="60" height="60" src={logo} alt="Logo" />
        <div className="footer__links">
          <a href="/">FAQs</a>
          <a href="/">Contact Us</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Press Kit</a>
          <a href="/">Install Guide</a>
        </div>
        <div className="footer__socials">
          <a href="/">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Mapache-Code" target="_blank" rel="noopener noreferrer">Yuu Code</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
