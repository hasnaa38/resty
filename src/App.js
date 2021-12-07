import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Form from './components/form/index';
import Results from './components/results/index';

export default function App() {
  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});
  let [goFlag, setGoFlag] = useState(false);
  let [resultFlag, setResultFlag] = useState(false);

  useEffect(() => {
    let responseFunction = async () => {
      setResultFlag(false);
      setGoFlag(requestParams.url); // when its empty it undefined: false, when it has a value=go clicked: true
      let newResponse = {};
      let newCount = 0;
      let config = {
        method: `${requestParams.method}`,
        baseURL: `${requestParams.url}`,
        body: `${requestParams.body}`
      }
      await axios(config).then(response => {
        setGoFlag(false);
        setResultFlag(true);
        newResponse = {
          headers: response.headers,
          body: response.data
          };
          newCount = newResponse.body.length;
      })
      // mock output
      const data = {
        count: newCount,
        results: newResponse,
      };
      setData(data);
    }
    responseFunction();
  }, [requestParams]);

  let callApi = (requestParams) => {
    setRequestParams(requestParams);
  }

  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={callApi}/>
      {(goFlag || resultFlag) && <div data-testid='method' className='textDev'>Request Method: {requestParams.method}</div>}
      {(goFlag || resultFlag) && <div className='textDev'>URL: {requestParams.url}</div>}
      {(goFlag || resultFlag) && <div className='textDev'>Body: {requestParams.body}</div>}
      <Results data={data} resultFlag={resultFlag} goFlag={goFlag}/>
      <Footer />
    </React.Fragment>
  );
}