import React, { useState } from 'react';
import './form.scss';

export default function Form(props) {
  let {handleApiCall} = props;
  let [method, setMethod] = useState('get');
  let handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      method: method,
      url: e.target.url.value,
      body: e.target.body.value
    };
    console.log(formData);
    handleApiCall(formData);
  }
  return (
    <>
      <form data-testid='form-submit' onSubmit={handleSubmit}>
        <label className='inputLabel'>
          <span>URL: </span>
          <input name='url' type='text' />
          <textarea name='body' type='text'>JSON body</textarea>
          <button type='submit'>GO!</button>
        </label>
        <label className='methods'>
          <span onClick={()=>{setMethod('get')}} id='get'>GET</span>
          <span onClick={()=>{setMethod('post')}} id='post'>POST</span>
          <span onClick={()=>{setMethod('put')}} id='put'>PUT</span>
          <span onClick={()=>{setMethod('delete')}} id='delete'>DELETE</span>
        </label>
      </form>
    </>
  )
}