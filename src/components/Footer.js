import React, { Component } from 'react';
import logo from '../images/logo-adalab.png';
import '../styles/App.scss';

class Footer extends Component {
  render() {
    return (
      <footer class='footer'>
        <small>Ecode &copy;2021 logo adalab</small>

        <img
          class='footer__image'
          src={logo}
          alt='logo adalab'
          title='Logo de Adalab'
        ></img>
      </footer>
    );
  }
}

export default Footer;
