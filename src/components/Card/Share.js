import React, { Component } from "react";

class Share extends Component {
  constructor(props) {
    super(props);

    this.fetchButton = this.fetchButton.bind(this);
  }

  fetchButton = () => {
    //VERIFICACIONES, si todos los datos están completados realizaríamos el fetch
    this.props.handleFetch();
    //si no, mostrar textos
  };

  render() {
    return (
      //<div className="marginform">
      <fieldset className="share__form js-share">
        <div className="container__share">
          <button
            className="container__share__button js-createcard "
            type="button"
            onClick={this.fetchButton}
          >
            <a
              className="share__button--link"
              title="Crear Tarjeta"
              target="_blank"
            >
              <i className="far fa-address-card"></i>Crear Tarjeta
            </a>
          </button>
          <div className="twitter_button js-response hidden"></div>
          <button
            className="container__share__twitter js-twitter hidden"
            type="button"
          >
            <a
              className="share__twitter--link js-linkTwitter"
              title="Twitter"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
              Compartir en Twitter
            </a>
          </button>
        </div>
      </fieldset>
      //</div>
    );
  }
}

export default Share;
