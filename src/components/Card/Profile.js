import React from 'react';
import PropTypes from 'prop-types';
import defaultPhoto from '../../images/ilustraciones.gif';

class Profile extends React.Component {
  render() {
    const photo = this.props.photo === '' ? defaultPhoto : this.props.photo;
    return (
      <div
        className='card_image'
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
    );
  }
}

Profile.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default Profile;
