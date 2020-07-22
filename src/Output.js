import React, {useEffect} from 'react';
import './App.css';

function Output(props) {

  useEffect(() => {
    props.changeLoadingStatus(true);
  });

  if(props.isLoading) {
    return(
      <div className="loading">
        Loading..
      </div>
    );
  }
  return(
    <div className="output">
      <h2 id="summary-header">Text Summary</h2>
      <p>{props.outputText}</p>
    </div>
  );
}

export default Output;
