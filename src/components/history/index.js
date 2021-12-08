'use strict';
import React, { useState } from 'react';
import JSONPretty from 'react-json-pretty';
let JSONPrettyMon = require('react-json-pretty/dist/acai');

function History(props) {
    let { history } = props;
    let[showResult, setShowResult] = useState(false);

    let handleResult = () => {
        setShowResult(true);
    }

    return (
        <>
            <div>History Tab</div>
            {history ? history.map(element => {
                return (
                    <div>
                        <button onClick={handleResult}><p>{element.requestParams.method}</p></button>
                        <p>{element.requestParams.url}</p>
                        <p>{element.requestParams.body}</p>
                        {showResult && <JSONPretty id="json-pretty" data={element.data} theme={JSONPrettyMon}></JSONPretty>}
                    </div>
                )
            }) : null}
        </>
    )
}
export default History;