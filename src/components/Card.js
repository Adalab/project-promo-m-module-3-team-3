import React, { Component } from 'react';
import Section1 from './Section1';
import '../styles/App.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Card extends Component {
  render() {
    return (
      <main className='cards_main'>
        <section className='section1'>
          <Section1 />
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
