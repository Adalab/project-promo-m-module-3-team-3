import React from 'react';
import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import CardPreview from './CardPreview';
import Title from './Title';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='cards_main'>
        <section className='cards_main--preview'>
          <CardPreview />
        </section>
        <form className='js-form form cards_main--form'>
          <Title
            nameClass='js-cdesign'
            title='Diseña'
            iconClass='fa-object-ungroup'
            arrowClass='js-arrowD'
          />
          <Design />
          <Title
            nameClass='js-cfill'
            title='rellena'
            iconClass='fa-keyboard'
            arrowClass='js-arrowF'
          />
          <Fill />
          <Title
            nameClass='js-cshare'
            title='comparte'
            iconClass='fas fa-share-alt'
            arrowClass='js-arrowS'
          />
          <Share />
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
