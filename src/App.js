import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Form from './components/form/index';
import Results from './components/results/index';

export default function App() {
  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});

  let callApi = async (requestParams) => {
    setRequestParams(requestParams);
    let newResponse = {};
    let newCount = 0;
    await axios.get(`${requestParams.url}`).then(response => {
      newResponse = {
        headers: response.headers,
        body: response.data
      };
      newCount = newResponse.body.length;
    });
    // mock output
    const data = {
      count: newCount,
      results: newResponse,
    };
    setData(data);
  }

  return (
    <React.Fragment>
      <Header />
      <div data-testid='method' className='textDev'>Request Method: {requestParams.method}</div>
      <div className='textDev'>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}