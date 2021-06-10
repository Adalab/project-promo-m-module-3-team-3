import React from "react";
import CardPreview from "./CardPreview";
import Form from "./Form";
import background from "../../images/bg-simple.png";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = {
      name: "",
      job: "",
      image: "",
      email: "",
      linkedin: "",
      github: "",
      phone: "",
      palette: "1",
      avatar: "",
    };
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
  handleResetClick(ev, name) {
    ev.preventDefault();
    this.setState({ name: name });
  }

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
          />
        </main>
      </div>
    );
  }
}

export default Main;
