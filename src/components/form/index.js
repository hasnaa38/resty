import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './form.scss';

export default function Form(props) {
  let {handleApiCall} = props;
  let [method, setMethod] = useState('GET');
  let handleSubmit = (e) => {
    e.preventDefault();
    let body = 'no body'
    if(method === 'POST' || method === 'PUT'){
      body = e.target.body.value;
    }
    let formData = {
      method: method,
      url: e.target.url.value,
      body: body
    };
    handleApiCall(formData);
  }

  let handleClick=(e)=>{
    document.getElementById(method).style.background = '#4a4a48';
    e.target.style.background = 'blue';
  }

  return (
    <>
      <form data-testid='form-submit' onSubmit={handleSubmit}>
        <label className='inputLabel'>
          <span>URL: </span>
          <input name='url' type='text' />
          <button type='submit'>GO!</button>
        </label>
        <label className='methods'>
          <span onClick={(e)=>{setMethod('GET'); handleClick(e)}} id='GET'>GET</span>
          <span onClick={(e)=>{setMethod('POST'); handleClick(e)}} id='POST'>POST</span>
          <span onClick={(e)=>{setMethod('PUT'); handleClick(e)}} id='PUT'>PUT</span>
          <span onClick={(e)=>{setMethod('DELETE'); handleClick(e)}} id='DELETE'>DELETE</span>
        </label>
          {(method === 'POST' || method === 'PUT') && <textarea name='body' type='text' rows='4' cols='50'>JSON body</textarea>}
      </form>
    </>
  )
}