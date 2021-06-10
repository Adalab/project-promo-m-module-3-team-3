import React, { Component } from "react";
import logo from "../images/logo-adalab.png";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <small>Ecode &copy;2021 logo adalab</small>

        <img
          className="footer__image"
          src={logo}
          alt="logo adalab"
          title="Logo de Adalab"
        ></img>
      </footer>
    );
  }
}

export default Footer;
