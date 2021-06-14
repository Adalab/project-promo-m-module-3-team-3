import React from 'react';
import CardPreview from './CardPreview';
import Form from './Form';
import background from '../../images/bg-simple.png';
import { postDataFetch } from '../../services/api';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.response = "";

    this.state = {
      name: '',
      job: '',
      image: '',
      email: '',
      linkedin: '',
      github: '',
      phone: '',
      palette: '1',
      avatar: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleFetch = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const value = ev.target.value;
    const key = ev.target.name;
    const data = {
      [key]: value,
    };
    this.setState(data);
  }

  updateAvatar(avatar) {
    this.setState({ avatar: avatar });
  }

  handleResetClick(ev) {
    ev.preventDefault();
    this.setState({
      name: '',
      job: '',
      image: '',
      email: '',
      linkedin: '',
      github: '',
      phone: '',
      palette: '1',
      avatar: '',
    });
  }

<<<<<<< HEAD
  /*Ver cómo es esta función
  handleFetch() {
    postDataFetch()
      .then((resultData) => {
        
  }*/
=======
  handleFetch() {
    postDataFetch(this.state).then((resultData) => {
      if (resultData.success === false) {
        console.log(resultData);
        this.response = "Faltan Datos por llenar";
      } else {
        const textCard = "Echa un vistazo a mi tarjeta de visita 🌱 ";
        this.response = (
          <>
            <h3 class="cardcreated-js">La tarjeta ha sido creada:</h3>
            <p>
              <a class="linkcard" target="_blank" href={resultData.cardURL}>
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
                target="_blank"
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
>>>>>>> 531ffb0cb2ad34f0e578e84c11f7904c1442621c

  render() {
    return (
      <div className='cards_main--background'>
        <main
          className='cards_main'
          style={{ backgroundImage: `url(${background})` }}
        >
          <section className='cards_main--preview'>
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
