import React, { useState } from 'react';
import './form.scss';

export default function Form(props) {
  let {handleApiCall} = props;
  let [method, setMethod] = useState('get');
  let [color, setColor] = useState('gray');
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

  let handleClick=(e)=>{
    console.log(e);
    let newColor = 'gray';
    e.target.style.background = 'blue';
    setColor(newColor); 
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
          <span style={{background:`${color}`}} onClick={(e)=>{setMethod('get'); handleClick(e)}} id='get'>GET</span>
          <span style={{background:`${color}`}} onClick={(e)=>{setMethod('post'); handleClick(e)}} id='post'>POST</span>
          <span style={{background:`${color}`}} onClick={(e)=>{setMethod('put'); handleClick(e)}} id='put'>PUT</span>
          <span style={{background:`${color}`}} onClick={(e)=>{setMethod('delete'); handleClick(e)}} id='delete'>DELETE</span>
        </label>
      </form>
    </>
  )
}