import React, { Component } from 'react';
import '../styles/App.scss';
import awesome from '../images/logo-awesome-profile-cards.svg';

class Template extends Component {
  render() {
    return (
      <header className='header'>
        <a href='index.html'>
          <img
            className='header__image'
            src={awesome}
            alt='logotipo'
            title='Awesome profile cards'
          ></img>
        </a>
      </header>
    );
  }
}

export default Template;
