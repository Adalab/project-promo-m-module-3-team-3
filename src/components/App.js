import React from 'react';
import '../styles/App.scss';
import Main from './Card/Main';
import Landing from './Landing/Landing';
import Footer from './Footer';
import PageNotFound from './PageNotFound';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/card' component={Main} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
