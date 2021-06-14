import React, { Component } from "react";

class Share extends Component {
  render() {
    return (
      //<div className="marginform">
      <fieldset className="share__form js-share">
        <div className="container__share">
          <a
            className="container__share__button"
            title="Crear Tarjeta"
            target="_blank"
            onClick={this.props.handleFetch}
          >
            <i className="far fa-address-card"></i>Crear Tarjeta
          </a>

          <div className="twitter_button">{this.props.response}</div>
        </div>
      </fieldset>
      //</div>
    );
  }
}

export default Share;
