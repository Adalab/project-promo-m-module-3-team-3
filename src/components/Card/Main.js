import React from 'react';
import CardPreview from './CardPreview';
import Form from './Form';
import Header from '../Header';
import background from '../../images/bg-simple.png';
import ls from '../../services/localStorage';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      job: '',
      email: '',
      linkedin: '',
      github: '',
      phone: '',
      palette: '1',
      photo: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  componentDidMount() {
    if (ls.get('data')) {
      const localData = ls.get('data');
      this.setState(localData);
    }
  }

  componentDidUpdate() {
    ls.set('data', this.state);
  }

  handleChange(ev) {
    const value = ev.target.value;
    const key = ev.target.name;
    const data = {
      [key]: value,
    };
    this.setState(data);
  }

  updateAvatar(photo) {
    this.setState({ photo: photo });
  }

  handleResetClick(ev) {
    ev.preventDefault();
    this.setState({
      name: '',
      job: '',
      email: '',
      linkedin: '',
      github: '',
      phone: '',
      palette: '1',
      photo: '',
    });
  }

  render() {
    return (
      <>
        <Header />
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
            />
          </main>
        </div>
      </>
    );
  }
}

export default Main;
