import React from 'react';
import './form.scss';

//     this.props.handleApiCall(formData);
//   }

export default function Form(props) {
  let handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className='inputLabel'>
          <span>URL: </span>
          <input name='url' type='text' />
          <button type='submit'>GO!</button>
        </label>
        <label className='methods'>
          <span id='get'>GET</span>
          <span id='post'>POST</span>
          <span id='put'>PUT</span>
          <span id='delete'>DELETE</span>
        </label>
      </form>
    </>
  )
}