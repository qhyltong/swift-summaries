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
      keyPhraseOutput: null,
      keyPhraseItems: null,
      rareWordsItems: null
    }
  }

  changeLoadingStatus(status) {
    this.setState({isLoading: status});
  }

  changeText(text) {
    this.setState({inputText: text});

    /* TODO */
    /*add fetch call for both key phrase and rare words,
      take fetch calls out of Keyphrases.js, have a .then */

    /*.then(()=> this.setState({keyPhraseItems: [name_of_phrase_var], rareWordsItems: [name of rare word var]}))*/
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
