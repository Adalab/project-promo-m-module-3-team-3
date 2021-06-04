import React from 'react';
import '../styles/App.scss';
import CardPreview from './CardPreview';
import Form from './Form';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      job: '',
      image: '',
      email: '',
      linkedin: '',
      github: '',
      phone: '',
      palette: '',
    };
  }
  handleChange(inputData) {
    console.log(inputData.key);
    const data = {
      [inputData.key]: inputData.value,
    };
    this.setState(data);
  }

  render() {
    return (
      <main className='cards_main'>
        <section className='cards_main--preview'>
          <CardPreview handleChange={this.handleChange} />
        </section>
        <Form />
      </main>
    );
  }
}

export default Main;
