import React, { Component } from 'react';
import ec from '../images/ec.png';
import hojas from '../images/hojas.png';
import de from '../images/de.png';
//import bg from '../images/bg-simple.png'
import '../styles/App.scss';


class Main extends Component {
  render() {
    return (
//        <div className="background"></div>
//      <div className="star"></div>
   //    <div className="plant"></div>
        
        <main className="main"> 
            <div className="logotype">
                <img className="logotype__image--ec" src={ec} alt="logotipo"
                    title="Awesome profile cards">
                <div className="logotype__rectangle">
                    <div className="logotype__circle">
                        <img className="logotype__circle--hojas" src={hojas} alt="hojas">
                    </div>
                </div>
                <img className="logotype__image--de" src={de} alt="logo" title="Awesome profile cards">
            </div>
        
            <h1 className="main__title">Crea tu tarjeta de visita</h1>
            <p className="main__text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
            <section className="main__section">
                <div className="main__section-box">
                    <div className="main__section-box--icon"><i className="far fa-object-ungroup"></i></div>
                    <div className="main__section-box--text">Diseña</div>
                </div>
                <div className="main__section-box">
                    <div className="main__section-box--icon"><i className="far fa-keyboard"></i></div>
                    <div className="main__section-box--text">Rellena</div>
                </div>
                <div className="main__section-box">
                    <div className="main__section-box--icon"><i className="fas fa-share-alt"></i></div>
                    <div className="main__section-box--text">Comparte</div>
                </div>
            </section>
            <button className="main__button" type="button"><a className="main__button--link" href="cards.html"
                    title="comenzar">Comenzar</a></button>
        </main>
       );
    }
}


export default Main;
