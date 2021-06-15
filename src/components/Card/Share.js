import React, { Component } from 'react';
import postDataFetch from '../../services/api';

class Share extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: '',
      url: '',
    };

    this.handleFetch = this.handleFetch.bind(this);
  }

  handleFetch(ev) {
    ev.preventDefault();
    this.userData = this.props;
    if (this.props.name === '') {
      this.setState({ response: 'Debes rellenar el nombre' });
    } else if (this.props.job === '') {
      this.setState({ response: 'Debes rellenar el puesto' });
    } else if (this.props.photo === '') {
      this.setState({ response: 'Debes rellenar la imagen' });
    } else if (this.props.email === '') {
      this.setState({ response: 'Debes rellenar el email' });
    } else if (this.props.linkedin === '') {
      this.setState({ response: 'Debes rellenar el linkedin' });
    } else if (this.props.github === '') {
      this.setState({ response: 'Debes rellenar el github' });
    } else if (this.props.phone === '') {
      this.setState({ response: 'Debes rellenar el teléfono' });
    } else {
      postDataFetch(this.userData).then((resultData) => {
        if (resultData.success === false) {
          console.log(this.userData);
          this.setState({ response: 'Faltan datos por llenar' });
        } else {
          console.log(resultData);
          this.setState({
            response: true,
            url: resultData.cardURL,
          });
        }
      });
    }
  }

  render() {
    const textCard = 'Echa un vistazo a mi tarjeta de visita 🌱 ';
    const answer = (
      <>
        <h3 className='cardcreated-js'>La tarjeta ha sido creada:</h3>
        <a className='linkcard' href={this.state.url}>
          {this.state.url}
        </a>
        <a
          className='container__share__twitter'
          href={`https://twitter.com/intent/tweet?text=${textCard}&url=${this.state.url}&hashtags=Adalabers,JavaScript,PromoMileva,week7of12`}
          title='Twitter'
        >
          <i className='fab fa-twitter'></i>
          Compartir en Twitter
        </a>
      </>
    );
    return (
      <fieldset className='share__form js-share'>
        <div className='container__share'>
          <button
            className='container__share__button'
            title='Crear Tarjeta'
            target='_blank'
            onClick={this.handleFetch}
          >
            <i className='far fa-address-card'></i>Crear Tarjeta
          </button>

          <div className='twitter_button'>
            {this.state.response === true ? answer : this.state.response}
          </div>
        </div>
      </fieldset>
    );
  }
}

export default Share;
