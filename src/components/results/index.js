import React from 'react';
import './results.scss';

export default function Results(props){
  let {data} = props;
  return(
    <section>
      <pre data-testid='submit-result' >{data? JSON.stringify(data, undefined, 2) : 'loading'}</pre>
    </section>
  );
}