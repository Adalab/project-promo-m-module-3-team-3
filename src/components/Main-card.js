import React, { Component } from 'react';
import photo from '../images/ilustraciones.gif';
import '../styles/App.scss';

class Card extends Component {
  render() {
    return (
      <main class='cards_main'>
        <section class='section1'>
          <section className='container1'>
            <button className='button_reset' type='reset'>
              <i className='fa fa-trash' aria-hidden='true'></i>reset
            </button>
            <div className='card'>
              <div className='card_header'>
                <div className='rectangle'></div>
                <div className='name_job'>
                  <div className='name'>Mileva Marić</div>
                  <div className='job'>Matemática</div>
                </div>
              </div>
              <img
                className='card_image js__profile-preview'
                src={photo}
                alt=''
              ></img>

              <div className='logos'>
                <div className='icon js-icon1 opacity'>
                  <a
                    href='tel:'
                    className='link1 js-phone'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fas fa-mobile-alt iconcolor'></i>
                  </a>
                </div>
                <div className='icon js-icon2 opacity'>
                  <a
                    href='mailto:'
                    className='link1 js-email'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='far fa-envelope iconcolor'></i>
                  </a>
                </div>
                <div className='icon js-icon3 opacity'>
                  <a
                    href=''
                    className='link1 js-linkedin'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fab fa-linkedin-in iconcolor'></i>
                  </a>
                </div>
                <div className='icon js-icon4 opacity'>
                  <a
                    href=''
                    className='link1 js-github'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fab fa-github-alt iconcolor'></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section class='section2'>
          <form className='js-form form'>
            {/* <include src='./design.html'></include>
            <include src='./fill.html'></include>
            <include src='./share.html'></include> */}
          </form>
        </section>
      </main>
    );
  }
}

export default Card;
