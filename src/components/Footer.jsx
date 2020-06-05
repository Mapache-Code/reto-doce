import React from "react";

import "./styles/Footer.css";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img width="60" height="60" src={logo} alt="Logo" />
        <div className="footer__links">
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Press Kit</a>
          <a href="#">Install Guide</a>
        </div>
        <div className="footer__socials">
          <a href="#">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </div>

        <p class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Mapache-Code">Yuu Code</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
