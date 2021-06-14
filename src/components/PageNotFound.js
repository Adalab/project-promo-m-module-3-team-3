import React from "react";
import { Link } from "react-router-dom";
import fav from "../images/favicon.png";

function PageNotFound() {
    return (
      <div className="App PagNot">
         <h1 className= "PagNot-title">Página no enc <img class="PagNot-image" src={fav} alt="logotipo"></img>
         ntrada</h1>
          <p  className= "PagNot-text"> Vuelve a inicio haciendo click  
          <Link className="PagNot-link" to="/">
           AQUI </Link>
          </p>
      </div>
    );
  }
  
  export default PageNotFound;