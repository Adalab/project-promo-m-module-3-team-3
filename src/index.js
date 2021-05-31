import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.scss";
import Collapsible from "./components/Collapsible-title";
import Design from "./components/Design";
import Fill from "./components/Fill";
import Footer from "./components/Footer";
import Main from "./components/Main";

import Section1 from "./components/Section1";


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Collapsible />
    <Design />
    <Fill />
    <Footer />
    <Main />
    <Section1 />
  </React.StrictMode>,
  document.getElementById("root")
);
