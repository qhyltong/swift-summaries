import React from 'react';
import loader from './swinging.gif';
import './App.css';

function Output(props) {

  if(props.isLoading) {
    return(
      <div className="loading-output">
        <img className="spinner" src={loader} alt="loading..." />
      </div>
    );
  }
  return(
    <div className="output">
      <h2 id="summary-header">Text Summary</h2>
      <p id="summary-p">{props.outputText}</p>
    </div>
  );
}

export default Output;
