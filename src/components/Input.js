import React from "react";
import "../styles/App.scss";

function Input(props) {
  // const handleChange = (ev) => {
  //   console.log('hola', props.handleChange);
  //   props.handleChange({
  //     value: ev.target.value,
  //     key: ev.target.name,
  //   });
  // };

  return (
    <>
      <label htmlFor={props.htmlFor} className='label'>
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className='input'
        onChange={props.handleChange}
      />
    </>
  );
}

export default Input;
