import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.scss";
import Collapsible from "./components/Collapsible-title";
import Design from "./components/Design";
import Fill from "./components/Fill";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Section1 from "./components/Section1";
import Share from './components/Share';
import Card from "./components/Card";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Collapsible />
    <Card />
    <Design />
    <Fill />
    <Share />
    <Main />
    <Section1 />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
