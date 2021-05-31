<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.scss";
import Collapsible from "./components/Collapsible-title";
import Design from "./components/Design";
import Fill from "./components/Fill";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import Header from './components/Header';
import Collapsible from './components/Collapsible-title';
import Design from './components/Design';
import Fill from './components/Fill';
import Footer from './components/Footer';
>>>>>>> 9cbb6422904bc978a1a3105ccdb0222deba254e2

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Collapsible />
    <Design />
    <Fill />
    <Footer />
    <Section1 />
  </React.StrictMode>,
  document.getElementById("root")
);
