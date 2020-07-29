import React from 'react';
import './App.css';
import circle from './circle.gif';

function Output(props) {

  if(props.isLoading) {
    return(
      <div className="output">
        <img src={circle} alt="loading..." />
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
