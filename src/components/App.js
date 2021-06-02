import React from 'react';
import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
