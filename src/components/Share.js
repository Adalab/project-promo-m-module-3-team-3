import React, { Component } from "react";
import "../styles/App.scss";

class Share extends Component {
  render() {
    return (
      /*<include src="./collapsible.html" title="comparte" icon="fas fa-share-alt" arrowmove="js-arrowS" clase="js-cshare">
    </include>*/
      <div className="marginform">
        <fieldset className="share_form js-share">
          <container className="container__share">
            <button
              className="container__share--button js-createcard"
              type="button"
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
              className="container__share--twitter js-twitter hidden"
              type="button"
            >
              <a
                className="share__twitter--link js-linkTwitter"
                title="Twitter"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
                Compartir en Twitter
              </a>
            </button>
          </container>
        </fieldset>
      </div>
    );
  }
}

export default Share;
