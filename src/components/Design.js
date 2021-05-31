import React, { Component } from 'react';
import '../styles/App.scss';

class Design extends Component {
  render() {
    return (
      <div className='js-design marginform'>
        <h3 className='colortext'>colores</h3>

        <fieldset className='design'>
          <label className='design__option-label label1'>
            <input
              type='radio'
              name='palette'
              className='design__option-radio js-palette'
              value='1'
              checked
              id='blue'
            />
            <ul className='palette-1'>
              <li className='design__option-color color-1'></li>
              <li className='design__option-color color-2'></li>
              <li className='design__option-color color-3'></li>
            </ul>
          </label>
          <label className='design__option-label label2'>
            <input
              type='radio'
              name='palette'
              className='design__option-radio js-palette'
              value='2'
              id='red'
            />
            <ul className='palette-2'>
              <li className='design__option-color color-4'></li>
              <li className='design__option-color color-5'></li>
              <li className='design__option-color color-6'></li>
            </ul>
          </label>
          <label className='design__option-label label3'>
            <input
              type='radio'
              name='palette'
              className='design__option-radio js-palette'
              value='3'
              id='yellow'
            />
            <ul className='palette-3'>
              <li className='design__option-color color-7'></li>
              <li className='design__option-color color-8'></li>
              <li className='design__option-color color-9'></li>
            </ul>
          </label>
        </fieldset>
      </div>
    );
  }
}

export default Design;
