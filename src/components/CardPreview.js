import React, { Component } from "react";
import "../styles/App.scss";
import photo from "../images/ilustraciones.gif";

class CardPreview extends Component {
  render() {
    return (
      <section className='card-preview'>
        <button className='button_reset' type='reset'>
          <i className='fa fa-trash button_reset--icon' aria-hidden='true'></i>
          reset
        </button>
        <div className='card'>
          <div className='card_header'>
            <h2 className='card_header--name'>
              {this.props.name ? this.props.name : "Mileva Màric"}
            </h2>
            <h3 className='card_header--job'>
              {this.props.job ? this.props.job : "Matemática"}
            </h3>
          </div>
          <img
            className='card_image js__profile-preview'
            src={photo}
            alt=''
          ></img>

          <div className='card_logos'>
            <a
              href={this.props.phone}
              className='link1 js-phone card_logos--icon'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fas fa-mobile-alt'></i>
            </a>

            <a
              href={`mailto: ${this.props.email}`}
              className='link1 js-email card_logos--icon'
              target='_blank'
              rel='noreferrer'
            >
              <i className='far fa-envelope'></i>
            </a>
            <a
              href={`https://www.linkedin.com/in/ ${this.props.linkedin}`}
              className='link1 js-linkedin card_logos--icon'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-linkedin-in'></i>
            </a>

            <a
              href={`https://github.com/
              ${this.props.github}`}
              className='link1 js-github card_logos--icon'
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
// CardPreview.defaultProps = {
//   name: "Mileva Màric",
//   job: "Matemática",
// };

export default CardPreview;
