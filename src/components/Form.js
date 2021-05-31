import React, { Component } from 'react';
import '../styles/App.scss';

class Form extends Component {
  render() {
    return (
      <form className='js-form form'>
        <include src='./design.html'></include>
        <include src='./fill.html'></include>
        <include src='./share.html'></include>
      </form>
    );
  }
}

export default Form;
