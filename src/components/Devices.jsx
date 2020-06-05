import React from "react";

import "./styles/Devices.css";
import devices from "../images/image-devices.png"
function Devices() {
  return (
    <section className="devices">
      <div className="container">
        <h2>Access Clipboard anywhere</h2>
        <p>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <img width="310" height="180" src={devices} alt="Devices" />
      </div>
    </section>
  );
}

export default Devices;
