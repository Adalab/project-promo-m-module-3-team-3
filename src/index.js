import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import Collapsible from './components/Collapsible-title';
import Design from './components/Design';
import Fill from './components/Fill';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Collapsible />
    <Design />
    <Fill />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
