import React, { Component } from 'react';
import '../styles/App.scss';

class Link extends Component {
  render() {
    return (
      <a className='@@aClass' href='@@url'>
        {/* @@text*/}
      </a>
    );
  }
}

export default Link;
