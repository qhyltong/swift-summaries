import React from 'react';
import './App.css';
import Form from './Form';
import Output from './Output';
import NavBar from './NavBar';
import Questions from './Questions';
import KeyPhrases from './KeyPhrases';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
    this.changeSelection = this.changeSelection.bind(this);
    this.changeLoadingStatus = this.changeLoadingStatus.bind(this);
    this.state = {
      inputText: null,
      summarySize: 50,
      isLoading: false,
    }
  }

  changeLoadingStatus(status) {
    this.setState({isLoading: status});
  }

  changeText(text) {
    this.setState({inputText: text});
  };

  changeSelection(size) {
    this.setState({summarySize: size})
  }

  render() {
    if(this.state.inputText) {
      return(
        <body>
          <NavBar />
          <div className="left">
            <Form
              changeText={this.changeText}
              changeSelection={this.changeSelection}
              changeLoadingStatus={this.changeLoadingStatus}
            />
          <Questions inputText={this.state.inputText} />
          </div>
          <div className="right">
            <Output
              isLoading={this.state.isLoading}
              outputText={this.state.inputText}
              changeLoadingStatus={this.changeLoadingStatus}
            />
            <KeyPhrases />
          </div>
        </body>
      );
    }
    return(
      <body>
        <NavBar />
        <div className="left">
          <Form
            changeText={this.changeText}
            changeSelection={this.changeSelection}
            changeLoadingStatus={this.changeLoadingStatus}
          />
        </div>
      </body>
    );
  }
}

export default App;
