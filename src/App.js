import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Output from './Output';
import NavBar from './NavBar';

function App(props) {

  function changeText(text) {
    resetText(text);
  };

  const [inputText, resetText] = useState(null);
  if(inputText) {
    return(
      <body>
        <NavBar />
        <Form changeText={changeText}/>
        <Output outputText={inputText}/>
       </body>
    );
  }
  return(
    <body>
      <NavBar />
      <Form changeText={changeText}/>
    </body>
  );
}

export default App;
