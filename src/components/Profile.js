import React from 'react';
import PropTypes from 'prop-types';
import defaultPhoto from '../images/ilustraciones.gif';

class Profile extends React.Component {
  render() {
    const avatar = this.props.avatar === '' ? defaultPhoto : this.props.avatar;
    return (
      <div
        className='card_image'
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    );
  }
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
