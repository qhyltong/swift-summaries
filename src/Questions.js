import React, {useState} from 'react';
import './App.css';

function Questions(props) {

  const [question, chooseQuestion] = useState(null);
  const [questionText, setText] = useState(null);

  function questionChange(event, questionChoice) {
    event.preventDefault();
    chooseQuestion(questionChoice);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event, questionText) {
    event.preventDefault();
    chooseQuestion(questionText)
  }

  if(question) {
    return(
      <div className="questions">
        <h2>Comprehension Questions</h2>
        <form onSubmit={(event) => handleSubmit(event, questionText)} className="form">
          <button
            id="names-button"
            className="question-buttons"
            onClick={(event) => questionChange(event, "names")}>
            What names are mentioned?
          </button>
          <button
            id="names-button"
            className="question-buttons"
            onClick={(event) => questionChange(event, "locations")}>
            What locations are mentioned?
          </button><br/>
          <input type="text" onChange={handleChange} id="question-box"/>
          <input type="submit" value="Submit" id="question-submit"/>
        </form>
        <div>
          {question}
        </div>
      </div>
    );
  }
  return(
    <div className="questions">
      <h2>Comprehension Questions</h2>
      <form onSubmit={(event) => handleSubmit(event, questionText)} className="form">
        <button
          id="names-button"
          className="question-buttons"
          onClick={(event) => questionChange(event, "names")}>
          What names are mentioned?
        </button>
        <button
          id="locations-button"
          className="question-buttons"
          onClick={(event) => questionChange(event, "location")}>
          What locations are mentioned?
        </button><br/>
        <input type="text" onChange={handleChange} id="question-box"/>
        <input type="submit" value="Submit" id="question-submit"/>
      </form>
    </div>
  );
}

export default Questions;
