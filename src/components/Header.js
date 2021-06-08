import React, { Component } from 'react';
import '../styles/App.scss';
import ecode from '../images/logo-ecode.png';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <a href='index.html'>
          <img
            className='header__image'
            src={ecode}
            alt='logotipo'
            title='Awesome profile cards'
          ></img>
        </a>
      </header>
    );
  }
}

export default Header;
