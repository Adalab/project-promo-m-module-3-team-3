import React, { Component } from "react";
import "../styles/App.scss";
import Palette from "./Palette";
class Design extends Component {
  render() {
    return (
      <div className="js-design marginform">
        <h3 className="colortext">colores</h3>

        <fieldset className="design">
          <Palette
            label="label1"
            value="1"
            id="blue"
            palette="palette-1"
            color1="color-1"
            color2="color-2"
            color3="color-3"
          />
          <Palette
            label="label2"
            value="2"
            id="red"
            palette="palette-2"
            color1="color-4"
            color2="color-5"
            color3="color-6"
          />
          <Palette
            label="label3"
            value="3"
            id="yellow"
            palette="palette-3"
            color1="color-7"
            color2="color-8"
            color3="color-9"
          />

        </fieldset>
      </div>
    );
  }
}

export default Design;
