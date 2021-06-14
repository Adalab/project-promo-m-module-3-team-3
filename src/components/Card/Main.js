import React from "react";
import CardPreview from "./CardPreview";
import Form from "./Form";
import background from "../../images/bg-simple.png";
import postDataFetch from "../../services/api";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.response = "";

    this.state = {
      name: "",
      job: "",
      //image: '',
      email: "",
      linkedin: "",
      github: "",
      phone: "",
      palette: "1",
      photo: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }

  handleChange(ev) {
    const value = ev.target.value;
    const key = ev.target.name;
    const data = {
      [key]: value,
    };
    this.setState(data);
  }

  updateAvatar(photo) {
    this.setState({ photo: photo });
  }

  handleResetClick(ev) {
    ev.preventDefault();
    this.setState({
      name: "",
      job: "",
      image: "",
      email: "",
      linkedin: "",
      github: "",
      phone: "",
      palette: "1",
      photo: "",
    });
  }

  handleFetch(ev) {
    ev.preventDefault();
    if (this.state.name === "") {
      this.response = "Debes rellenar el nombre";
    } else if (this.state.job === "") {
      this.response = "Debes rellenar el puesto";
    } else {
      postDataFetch(this.state).then((resultData) => {
        console.log(resultData);
        if (resultData.success === false) {
          this.response = "Faltan Datos por llenar";
        } else {
          const textCard = "Echa un vistazo a mi tarjeta de visita 🌱 ";
          this.response = (
            <>
              <h3 class="cardcreated-js">La tarjeta ha sido creada:</h3>
              <p>
                <a class="linkcard" href={resultData.cardURL}>
                  {resultData.cardURL}
                </a>
              </p>
              `;
              <button
                className="container__share__twitter js-twitter hidden"
                type="button"
              >
                <a
                  className="share__twitter--link js-linkTwitter"
                  href={`https://twitter.com/intent/tweet?text=${textCard}&url=${resultData.cardURL}&hashtags=Adalabers,JavaScript,PromoMileva,week7of12`}
                  title="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                  Compartir en Twitter
                </a>
              </button>
            </>
          );
        }
      });
    }
  }

  render() {
    return (
      <div className="cards_main--background">
        <main
          className="cards_main"
          style={{ backgroundImage: `url(${background})` }}
        >
          <section className="cards_main--preview">
            <CardPreview
              {...this.state}
              handleResetClick={this.handleResetClick}
            />
          </section>
          <Form
            handleChange={this.handleChange}
            {...this.state}
            updateAvatar={this.updateAvatar}
            handleResetClick={this.handleResetClick}
            handleFetch={this.handleFetch}
            response={this.response}
          />
        </main>
      </div>
    );
  }
}

export default Main;
