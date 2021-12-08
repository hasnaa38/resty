import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import './App.scss';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Form from './components/form/index';
import Results from './components/results/index';
import History from './components/history/index';

let initialState = {
  data: {},
  requestParams: {},
  history: []
  // goFlag: false,
  // resultFlag: false
}

let reducerFunction = (state, action) => {
  switch (action.type) {
    case 'setParamsAction':
      return { ...state, requestParams: action.payload };
    case 'setDataAction':
      return { ...state, data: action.payload };
    case 'setHistoryAction':
      // return {...state, history: newArray(state.history, action.payload)};
      return { ...state, history: [action.payload, ...state.history] };
    default:
      return state;
  }
}

// let newArray = (history, payload) => {
//   return [payload, ...history];
// }

export default function App() {
  let [goFlag, setGoFlag] = useState(false);
  let [resultFlag, setResultFlag] = useState(false);
  let [state, dispatch] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    let responseFunction = async () => {
      setResultFlag(false);
      setGoFlag(state.requestParams.url); // when its empty it undefined: false, when it has a value=go clicked: true
      let newResponse = {};
      let newCount = 0;
      let config = {
        method: `${state.requestParams.method}`,
        baseURL: `${state.requestParams.url}`,
        body: `${state.requestParams.body}`
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
      await dispatch({ type: 'setDataAction', payload: data });
      let obj = {
        requestParams: state.requestParams,
        data: data
      };
      dispatch({ type: 'setHistoryAction', payload: obj });

    }
    responseFunction();
  }, [state.requestParams], [state.data]);

  let callApi = (requestParams) => {
    // setRequestParams(requestParams);
    dispatch({ type: 'setParamsAction', payload: requestParams });
  }

  return (
    <React.Fragment>
      {/* <Router> */}
        {/* <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/history">
          </Route>
        </Switch> */}
        <Header />
            <Form handleApiCall={callApi} />
            {(goFlag || resultFlag) && <div data-testid='method' className='textDev'>Request Method: {state.requestParams.method}</div>}
            {(goFlag || resultFlag) && <div className='textDev'>URL: {state.requestParams.url}</div>}
            {(goFlag || resultFlag) && <div className='textDev'>Body: {state.requestParams.body}</div>}
            <Results data={state.data} resultFlag={resultFlag} goFlag={goFlag} />
            <History history={state.history} />
        <Footer />
      {/* </Router> */}

    </React.Fragment >
  );
}