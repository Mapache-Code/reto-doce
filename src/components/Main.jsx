import React from "react";

import "./styles/Main.css";
import logo from "../images/logo.svg";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <img
          className="main__logo"
          width="135"
          height="135"
          src={logo}
          alt="Logo"
        />
        <h1 className="main__title">A history of everything you copy</h1>
        <p className="main__text">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <button className="button button--ios">Download for iOS</button>
        <button className="button button--mac">Download for Mac</button>
      </div>
    </main>
  );
}

export default Main;
