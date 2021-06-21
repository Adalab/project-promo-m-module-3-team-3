import React from 'react';
import CardPreview from './CardPreview';
import Form from './Form';
import background from '../../images/bg-simple.png';

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
    );
  }
}

export default Main;



// import React from 'react';
// import CardPreview from './CardPreview';
// import Form from './Form';
// import background from '../../images/bg-simple.png';
// import ls from "../../services/localStorage";

// function Main() {
//   const localStorageData = ls.get("data") || {};
//   const [palette, setPalette] = useState(localStorageData.palette || "1");
//   const [name, setName] = useState(localStorageData.name || "");
//   const [job, setJob] = useState(localStorageData.job || "");
//   const [email, setEmail] = useState(localStorageData.email || "");
//   const [phone, setPhone] = useState(localStorageData.phone || "");
//   const [linkedin, setLinkedin] = useState(localStorageData.linkedin || "");
//   const [github, setGithub] = useState(localStorageData.github || "");
//   const [photo, setPhoto] = useState(localStorageData.photo || "");

//   const data = {
//     palette: palette,
//     name: name,
//     job: job,
//     email: email,
//     phone: phone,
//     linkedin: linkedin,
//     github: github,
//     photo: photo,
//   };

//   useEffect(() => {
//     ls.set("data", data);
//   }, [data]);

// handleChange(ev) {
//   const value = ev.target.value;
//   const key = ev.target.name;
//   const data = {
//     [key]: value,
//   };
//   this.setState(data);
// }

// updateAvatar(photo) {
//   this.setPhoto({ photo: photo });
// }

// handleResetClick(ev) {
//   ev.preventDefault();
//   this.setState({
//     setName: '',
//     setJob: '',
//     setEmail: '',
//     setLinkedin: '',
//     setGithub: '',
//     setPhone: '',
//     setPalette: '1',
//     setPhoto: '',
//   });
// }


//   return (
//     <div className='cards_main--background'>
//       <main
//         className='cards_main'
//         style={{ backgroundImage: `url(${background})` }}
//       >
//         <section className='cards_main--preview'>
//           <CardPreview
//             {...this.state}
//             handleResetClick={handleResetClick}
//           />
//         </section>
//         <Form
//           handleChange={handleChange}
//           {...this.state}
//           updateAvatar={pdateAvatar}
//           handleResetClick={handleResetClick}
//           handleFetch={handleFetch}
//         />
//       </main>
//     </div>
//   );
// }


// export default Main;