import React from "react";

function Palette(props) {
  return (
    <label className={`design__option-label ${props.label}`}>
      <input
        type="radio"
        name="palette"
        value={props.value}
        id={props.id}
        onChange={props.handleChange}
        checked={props.isChecked}
      />
      <ul className={props.palette}>
        <li className="design__option-1"></li>
        <li className="design__option-2"></li>
        <li className="design__option-3"></li>
      </ul>
    </label>
  );
}

export default Palette;
