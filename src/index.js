import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.scss";
import Collapsible from "./components/Collapsible-title";
import Design from "./components/Design";
import Fill from "./components/Fill";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";

ReactDOM.render(
  <React.StrictMode>
    <Collapsible />
    <Design />
    <Fill />
    <Footer />
    <Section1 />
  </React.StrictMode>,
  document.getElementById("root")
);
