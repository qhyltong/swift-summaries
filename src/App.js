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
    this.changeQALoadingStatus = this.changeQALoadingStatus.bind(this);
    this.state = {
      inputText: null,
      summarySize: 50,
      isLoading: false,
      keyPhraseOutput: null,
      keyPhraseItems: null,
      rareWordsItems: null,
      qaLoading: false
    }
  }

  changeQALoadingStatus(status) {
    this.setState({qaLoading: status});
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
          <Questions
            changeLoadingStatus={this.changeQALoadingStatus}
            inputText={this.state.inputText}
            isLoading={this.state.qaLoading} />
          </div>
          <div className="right">
            <Output
              isLoading={this.state.isLoading}
              outputText={this.state.inputText}
            />
          <KeyPhrases rareOutput={this.state.rareWordsItems} keyOutput={this.state.keyPhraseItems}/>
          </div>
        </body>
      );
    } else if(this.state.isLoading) {
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
          <div className="right">
            <Output
              isLoading={this.state.isLoading}
              outputText={this.state.inputText}
            />
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
