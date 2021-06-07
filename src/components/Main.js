import React from "react";
import "../styles/App.scss";
import CardPreview from "./CardPreview";
import Form from "./Form";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
      job: "",
      image: "",
      email: "",
      linkedin: "",
      github: "",
      phone: "",
      palette: "",
    };
  }
  handleChange(ev) {
    const value = ev.target.value;
    const key = ev.target.name;
    console.log(key);
    const data = {
      [key]: value,
    };
    this.setState(data);
  }

  render() {
    return (
      <main className='cards_main'>
        <section className='cards_main--preview'>
          <CardPreview
            name={this.state.name}
            job={this.state.job}
            email={this.state.email}
            linkedin={this.state.linkedin}
            github={this.state.github}
            phone={this.state.phone}
          />
        </section>
        <Form handleChange={this.handleChange} />
      </main>
    );
  }
}

export default Main;
