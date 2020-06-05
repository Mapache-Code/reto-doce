import React from "react";

import "./styles/Sponsors.css";
import google from "../images/logo-google.png";
import ibm from "../images/logo-ibm.png";
import microsoft from "../images/logo-microsoft.png";
import hp from "../images/logo-hp.png";
import vg from "../images/logo-vector-graphics.png";
function Sponsors() {
  return (
    <section className="sponsors">
      <div className="container">
        <img src={google} alt="Google" />
        <img src={ibm} alt="IBM" />
        <img src={microsoft} alt="Microsoft" />
        <img src={hp} alt="Hewlett Packard Enterprise" />
        <img src={vg} alt="VECTOR GRAPHICS" />
      </div>
    </section>
  );
}

export default Sponsors;
