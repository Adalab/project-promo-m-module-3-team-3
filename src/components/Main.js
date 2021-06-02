import React from 'react';
import '../styles/App.scss';
import CardPreview from './CardPreview';
import Form from './Form';

function Main() {
  return (
    <main className='cards_main'>
      <section className='cards_main--preview'>
        <CardPreview />
      </section>
      <Form />
    </main>
  );
}

export default Main;
