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
            <li>{props.output}</li>
            <li>Key Phrase 2</li>
            <li>Key Phrase 3</li>
            <li>Key Phrase 4</li>
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
        <ul className="phrase-list">
          <li>Rare Word: definition</li>
          <li>Rare Word: definition 2</li>
          <li>Rare Word: definition</li>
          <li>Rare Word: definition</li>
        </ul>
      </p>
    </div>
  );
}

export default KeyPhrases;
