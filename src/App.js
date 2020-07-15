import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Output from './Output';

function App(props) {

  function changeText(text) {
    resetText(text);
  };

  const [inputText, resetText] = useState(null);
  return(
    <body>
    <div className="submission">
      <h1>Swift Summaries</h1>
      <Form changeText={changeText}/>
      <Output outputText={inputText}/>
    </div>
    </body>
  );
}

export default App;
