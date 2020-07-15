import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Output from './Output';

function App(props) {

  function changeText(text) {
    resetText(text);
  };

  const [inputText, resetText] = useState(null);
  if(inputText) {
    return(
      <body>
        <h1>Swift Summaries</h1>
        <Form changeText={changeText}/>
        <Output outputText={inputText}/>
       </body>
    );
  }
  return(
    <body>
      <h1>Swift Summaries</h1>
      <Form changeText={changeText}/>
    </body>
  );
}

export default App;
