import React, { Component } from 'react';

class Share extends Component {
  render() {
    return (
      <fieldset className='share__form js-share'>
        <div className='container__share'>
          <button
            className='container__share__button'
            title='Crear Tarjeta'
            target='_blank'
            onClick={this.props.handleFetch}
          >
            <i className='far fa-address-card'></i>Crear Tarjeta
          </button>

          <div className='twitter_button'>
            {this.props.response ? <p>{this.props.response}</p> : null}
          </div>
        </div>
      </fieldset>
    );
  }
}

export default Share;
