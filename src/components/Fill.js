import React, { Component } from 'react';
import '../styles/App.scss';

class Fill extends Component {
  render() {
    return (
      <div className='marginform'>
        <fieldset className='js-fill personal-data form__share'>
          <label for='name' className='label'>
            Nombre completo
          </label>
          <input
            id='name'
            type='text'
            name='name'
            placeholder='Ej: Sally Jill'
            className='input'
            required
          />
          <label for='job' className='label'>
            Puesto
          </label>
          <input
            id='job'
            type='text'
            name='job'
            placeholder='Ej: Front-end unicorn'
            className='input'
            required
          />
          <label for='button' className='label'>
            Imagen de perfil
          </label>
          <div className='inline'>
            <label className='action__upload-btn button' for='img-selector'>
              Añadir imagen
            </label>
            <input
              type='file'
              name=''
              id='img-selector'
              className='action__hiddenField js__profile-upload-btn'
            />
            <div className='previous_img js__profile-image js__profile-preview'></div>
          </div>
          <label for='email' className='label'>
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='Ej: nombre@mail.com'
            className='input'
            required
          />
          <label for='phone' className='label'>
            Teléfono
          </label>
          <input
            id='phone'
            type='tel'
            name='phone'
            placeholder='Ej: 692699556'
            className='input'
            required
          />
          <label for='linkedIn' className='label'>
            LinkedIn
          </label>
          <input
            id='linkedin'
            type='text'
            name='linkedin'
            placeholder='sally.jill'
            className='input'
            required
          />
          <label for='github' className='label'>
            GitHub
          </label>
          <input
            id='github'
            type='text'
            name='github'
            placeholder='sally-jill'
            className='input'
          />
        </fieldset>
      </div>
    );
  }
}

export default Fill;
