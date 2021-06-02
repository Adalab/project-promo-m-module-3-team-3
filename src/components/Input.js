import React from "react";
import "../styles/App.scss";

function Input(props) {
  return (
    <>
      <label for={props.for} className="label">
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className="input"
      />
    </>
  );
}

export default Input;
