import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.scss";
import Collapsible from "./components/Collapsible-title";
import Design from "./components/Design";
import Fill from "./components/Fill";
import Footer from "./components/Footer";
import Main from "./components/Main";

ReactDOM.render(
  <React.StrictMode>
    <Collapsible />
    <Design />
    <Fill />
    <Footer />
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
