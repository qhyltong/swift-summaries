import React from 'react';
import './App.css';
import Form from './Form';
import Output from './Output';
import NavBar from './NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: null
    }
    this.changeText = this.changeText.bind(this);
  }

  changeText(text) {
    this.setState({inputText: text});
  };

  render() {
    if(this.state.inputText) {
      return(
        <body>
          <NavBar />
          <Form changeText={this.changeText}/>
          <Output outputText={this.state.inputText}/>
         </body>
      );
    }
    return(
      <body>
        <NavBar />
        <Form changeText={this.changeText}/>
      </body>
    );
  }
}

export default App;
