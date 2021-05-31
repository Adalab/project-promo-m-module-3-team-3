import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import Collapsible from './components/Collapsible-title';
// import Design from './components/Design';
// import Fill from './components/Fill';
import Footer from './components/Footer';
// import Share from './components/Share';
import Card from './components/Card';
import Header from './components/Header';
// import Main from './components/Main';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Collapsible />
    <Card />
    {/* <Design />
    <Fill />
    <Share /> */}
    {/* <Main /> */}
    {/* <Section1 /> */}
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
