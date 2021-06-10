import React, { Component } from 'react';
import '../styles/App.scss';
import Palette from './Palette';
class Design extends Component {
  render() {
    return (
      <div className='js-design marginform'>
        <h3 className='colortext'>colores</h3>

        <fieldset className='design'>
          <Palette
            label='label1'
            value='1'
            id='blue'
            palette='palette-1'
            handleChange={this.props.handleChange}
            isChecked={this.props.palette === '1'}
          />
          <Palette
            label='label2'
            value='2'
            id='red'
            palette='palette-2'
            handleChange={this.props.handleChange}
            isChecked={this.props.palette === '2'}
          />
          <Palette
            label='label3'
            value='3'
            id='yellow'
            palette='palette-3'
            handleChange={this.props.handleChange}
            isChecked={this.props.palette === '3'}
          />
        </fieldset>
      </div>
    );
  }
}

export default Design;
