import React, {useState} from 'react';
import './App.css';

function KeyPhrases(props) {
  const [sectionChoice, changeSection] = useState(1);

  function handleKeyChange(event) {
    event.preventDefault();
    changeSection(1);
  }

  function handleRareChange(event) {
    event.preventDefault();
    changeSection(0);
  }

  let keyPhrases = null;
  if(props.keyOutput) {
    keyPhrases = props.keyOutput.map(
      (phrase) => (
        <li key={phrase}>
          {phrase}
        </li>
      )
    );
  }

  let rareWords = null;
  if(props.rareOutput) {
    rareWords = props.rareOutput.map(
      (word) => (
        <li key={word}>
          {word}
        </li>
      )
    );
  }

  if(sectionChoice === 1) {
    return(
      <div className="key-phrases">
        <p id="keyphrase-p">
          <div id="phrase-buttons">
            <a
              onClick={handleKeyChange}
              href="#"
              className="selected-button"
              id="key-phrase-button">
                Key Phrases
            </a>
            <a
              onClick={handleRareChange}
              href="#"
              className="not-selected-button"
              id="rare-words-button">
                Rare Words
            </a>
          </div>
          <ol className="phrase-list">
            {keyPhrases}
          </ol>
        </p>
      </div>
    );
  }
  return(
    <div className="key-phrases">
      <p id="keyphrase-p">
        <div id="phrase-buttons">
          <a
            onClick={handleKeyChange}
            href="#"
            className="not-selected-button"
            id="key-phrase-button">
              Key Phrases
          </a>
          <a
            onClick={handleRareChange}
            className="selected-button"
            href="#"
            id="rare-words-button">
              Rare Words
          </a>
        </div>
        <ol className="phrase-list">
          {rareWords}
        </ol>
      </p>
    </div>
  );
}

export default KeyPhrases;
