import React, { Component } from "react";
import "../styles/App.scss";
import Input from "./Input";

class Fill extends Component {
  render() {
    return (
      <div className="marginform">
        <fieldset className="js-fill personal-data form__share">
          <Input
            for="name"
            label="Nombre completo"
            id="name"
            type="text"
            name="name"
            placeholder="Ej: Sally Jill"
          />
          <Input
            for="job"
            label="Puesto"
            id="job"
            type="text"
            name="job"
            placeholder="Ej: Front-end unicorn"
          />
          <Input
            for="button"
            label="Imagen de perfil"
            id="job"
            type="text"
            name="job"
            placeholder="Ej: Front-end unicorn"
          />

          <label for="button" className="label">
            Imagen de perfil
          </label>
          <div className="inline">
            <label className="action__upload-btn button" for="img-selector">
              Añadir imagen
            </label>
            <input
              type="file"
              name=""
              id="img-selector"
              className="action__hiddenField js__profile-upload-btn"
            />
            <div className="previous_img js__profile-image js__profile-preview"></div>
          </div>
          <Input
            for="email"
            label="Email"
            id="email"
            type="email"
            name="email"
            placeholder="Ej: nombre@mail.com"
          />
          <Input
            for="phone"
            label="Teléfono"
            id="phone"
            type="tel"
            name="phone"
            placeholder="Ej: 692699556"
          />
          <Input
            for="linkedIn"
            label="LinkedIn"
            id="linkedIn"
            type="text"
            name="linkedin"
            placeholder="sally.jill"
          />
          <Input
            for="github"
            label="GitHub"
            id="github"
            type="text"
            name="github"
            placeholder="sally-jill"
          />
        </fieldset>
      </div>
    );
  }
}

export default Fill;
