import React from 'react';
import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import CardPreview from './CardPreview';

function App() {
  return (
    <div className='App'>
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
