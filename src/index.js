import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import Collapsible from './components/Collapsible-title';
import Design from './components/Design';
import Fill from './components/Fill';
import Footer from './components/Footer';
import Share from './components/Share';
// import Section1 from './components/Section1';
import Header from './components/Header';
import Card from './components/Main-card';
// import Main from './components/Main';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Collapsible />
    <Card />
    <Design />
    <Fill />
    <Footer />
    <Share />
    {/* <Main /> */}
    {/* <Section1 /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
