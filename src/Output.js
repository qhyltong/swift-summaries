import React from 'react';
import './App.css';

function Output(props) {

  return(
    <div className="output">
      <h2 id="summary-header">Text Summary</h2>
      <p>{props.outputText}</p>
    </div>
  );
}

export default Output;
