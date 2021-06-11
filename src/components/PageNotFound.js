import React from "react";
import "../styles/App.scss";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
      <div className="App">
         <h1>Página no encontrada</h1>
          <p> Vuelve a inicio haciendo click 
          <Link className="" to="/">
          AQUI </Link>
          </p>
      </div>
    );
  }
  
  export default PageNotFound;