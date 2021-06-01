import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import Footer from './components/Footer';
import Card from './components/Card';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Card />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
