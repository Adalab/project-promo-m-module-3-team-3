import React, { Component } from 'react';
import '../styles/App.scss';

class Collapsible extends Component {
  render() {
    return (
      <div className='collapsiblebox @@clase'>
        <div className='collapsible'>
          <div className='collapsible__icon'>
            <i className='far @@icon'></i>
          </div>
          <div className='collapsible__title'>Diseña{/* @@title */}</div>
          <div className='arrow'>
            <i className='fas fa-chevron-down collapsible__icon2 @@arrowmove'></i>
          </div>
        </div>
        <div className='line'></div>
      </div>
    );
  }
}

export default Collapsible;
