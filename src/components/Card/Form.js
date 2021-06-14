import React from "react";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import Collapsable from "./Collapsable";

class Form extends React.Component {
  render() {
    return (
      <form
        onSubmit={this.props.handleForm}
        handleResetClick={this.handleResetClick}
        className="cards_main--form"
      >
        <Collapsable
          title="Diseña"
          iconClass="fa-object-ungroup"
          children={
            <Design
              handleChange={this.props.handleChange}
              palette={this.props.palette}
            />
          }
          open
        />
        <Collapsable
          title="rellena"
          iconClass="fa-keyboard"
          children={
            <Fill
              handleChange={this.props.handleChange}
              handleResetClick={this.props.handleResetClick}
              name={this.props.name}
              job={this.props.job}
              email={this.props.email}
              linkedin={this.props.linkedin}
              github={this.props.github}
              phone={this.props.phone}
              avatar={this.props.avatar}
              updateAvatar={this.props.updateAvatar}
            />
          }
        />
        <Collapsable
          title="comparte"
          iconClass="fas fa-share-alt"
          children={
            <Share
              handleFetch={this.props.handleFetch}
              response={this.props.response}
            />
          }
        />
      </form>
    );
  }
}

export default Form;
