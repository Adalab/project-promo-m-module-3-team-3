import React, { Component } from 'react';
import Profile from './Profile';

class CardPreview extends Component {
  constructor(props) {
    super(props);
    this.changeClass = this.changeClass.bind(this);
    this.colorClass = '';
  }

  changeClass() {
    this.colorClass = '';
    if (this.props.palette === '1') {
      this.colorClass = '';
    } else if (this.props.palette === '2') {
      this.colorClass = 'orange';
    } else {
      this.colorClass = 'yellow';
    }
    return this.colorClass;
  }
  render() {
    return (
      <section className='card-preview '>
        <button
          className='button_reset'
          type='reset'
          onClick={this.props.handleResetClick}
        >
          <i className='fa fa-trash button_reset--icon' aria-hidden='true'></i>
          reset
        </button>
        <div className={`card ${this.changeClass()}`}>
          <div className='card_header'>
            <h2 className='card_header--name'>
              {this.props.name ? this.props.name : 'Mileva Màric'}
            </h2>
            <h3 className='card_header--job'>
              {this.props.job ? this.props.job : 'Matemática'}
            </h3>
          </div>
          <Profile photo={this.props.photo} />

          <div className='card_logos'>
            <a
              href={this.props.phone}
              className={`card_logos--icon ${
                this.props.phone === '' ? '' : 'full'
              }`}
              target='_blank'
              rel='noreferrer'
            >
              <i className='fas fa-mobile-alt'></i>
            </a>

            <a
              href={`mailto: ${this.props.email}`}
              className={`card_logos--icon ${
                this.props.email === '' ? '' : 'full'
              }`}
              target='_blank'
              rel='noreferrer'
            >
              <i className='far fa-envelope'></i>
            </a>
            <a
              href={`https://www.linkedin.com/in/${this.props.linkedin}`}
              className={`card_logos--icon ${
                this.props.linkedin === '' ? '' : 'full'
              }`}
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-linkedin-in'></i>
            </a>

            <a
              href={`https://github.com/${this.props.github}`}
              className={`card_logos--icon ${
                this.props.github === '' ? '' : 'full'
              }`}
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-github-alt'></i>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default CardPreview;
