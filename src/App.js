import React from "react";
import "./App.css";
import {
  Main,
  Features,
  Devices,
  Tools,
  Sponsors,
  Download,
  Footer,
} from "./components/index";

function App() {
  return <React.Fragment>
    <Main />
    <Features />
    <Devices />
    <Tools />
    <Sponsors />
    <Download />
    <Footer />
  </React.Fragment>;
}

export default App;
