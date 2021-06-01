import React, { Component } from 'react';
import CardPreview from './CardPreview';
import '../styles/App.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Card extends Component {
  render() {
    return (
      <main className='cards_main'>
        <section className='section1'>
          <CardPreview />
        </section>
        <section className='section2'>
          <form className='js-form form'>
            <Design />
            <Fill />
            <Share />
          </form>
        </section>
      </main>
    );
  }
}

export default Card;
