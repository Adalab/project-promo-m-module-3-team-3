import React, { Component } from 'react';
import '../styles/App.scss';

class Share extends Component {
  render() {
    return (
      <div className='marginform'>
        <fieldset className='share_form js-share'>
          <div className='container__share'>
            <button
              className='container__share--button js-createcard'
              type='button'
            >
              <a
                className='share__button--link'
                title='Crear Tarjeta'
                target='_blank'
              >
                <i className='far fa-address-card'></i>Crear Tarjeta
              </a>
            </button>
            <div className='twitter_button js-response hidden'></div>
            <button
              className='container__share--twitter js-twitter hidden'
              type='button'
            >
              <a
                className='share__twitter--link js-linkTwitter'
                title='Twitter'
                target='_blank'
              >
                <i className='fab fa-twitter'></i>
                Compartir en Twitter
              </a>
            </button>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Share;
