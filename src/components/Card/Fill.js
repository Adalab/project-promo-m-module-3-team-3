import React, { Component } from "react";
import GetAvatar from "./GetAvatar";
import Input from "./Input";

class Fill extends Component {
  render() {
    console.log(this.props.name);
    return (
      <div className="marginform">
        <fieldset className="js-fill personal-data form__share">
          <Input
            htmlFor="name"
            label="Nombre completo"
            id="name"
            type="text"
            name="name"
            placeholder="Ej: Sally Jill"
            handleChange={this.props.handleChange}
            maxLength="18"
            value={this.props.name}
          />
          <Input
            htmlFor="job"
            label="Puesto"
            id="job"
            type="text"
            name="job"
            placeholder="Ej: Front-end unicorn"
            handleChange={this.props.handleChange}
            maxLength="20"
            value={this.props.job}
          />
          <label htmlFor="button" className="label">
            Imagen de perfil
          </label>
          <GetAvatar
            avatar={this.props.avatar}
            updateAvatar={this.props.updateAvatar}
          />
          <Input
            htmlFor="email"
            label="Email"
            id="email"
            type="email"
            name="email"
            placeholder="Ej: nombre@mail.com"
            handleChange={this.props.handleChange}
            value={this.props.email}
          />
          <Input
            htmlFor="phone"
            label="Teléfono"
            id="phone"
            type="tel"
            name="phone"
            placeholder="Ej: 692699556"
            handleChange={this.props.handleChange}
            value={this.props.phone}
          />
          <Input
            htmlFor="linkedIn"
            label="LinkedIn"
            id="linkedIn"
            type="text"
            name="linkedin"
            placeholder="sally.jill"
            handleChange={this.props.handleChange}
            value={this.props.linkedin}
          />
          <Input
            htmlFor="github"
            label="GitHub"
            id="github"
            type="text"
            name="github"
            placeholder="sally-jill"
            handleChange={this.props.handleChange}
            value={this.props.github}
          />
        </fieldset>
      </div>
    );
  }
}

export default Fill;
