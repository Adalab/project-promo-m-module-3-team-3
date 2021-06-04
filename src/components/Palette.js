import React from 'react';
import '../styles/App.scss';

function Palette(props) {
  return (
    <label className={`design__option-label ${props.label}`}>
      <input
        type='radio'
        name='palette'
        // className='design__option-radio js-palette'
        value={props.value}
        checked
        id={props.id}
      />
      <ul className={props.palette}>
        <li className='design__option-1'></li>
        <li className='design__option-2'></li>
        <li className='design__option-3'></li>
      </ul>
    </label>
  );
}

export default Palette;
