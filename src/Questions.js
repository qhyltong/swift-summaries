import React, {useState} from 'react';
import './App.css';
import spinner from './swinging.gif';

function Questions(props) {

  const [question, chooseQuestion] = useState(null);
  const [questionText, setText] = useState(null);
  /*Added new stare var here */
  const [questionType, changeType] = useState(null);

  function questionChange(event, questionChoice) {
    event.preventDefault();
    chooseQuestion(questionChoice);
    props.changeLoadingStatus(true);

    /*Added this line*/
    changeType("button");
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event, questionText) {
    event.preventDefault();
    props.changeLoadingStatus(true);
    chooseQuestion(questionText);

    /*Added this line */
    changeType("text");
  }

  /* Added in lines below*/
  let namesLocations = null;

  if(question && questionType === "button") {
    namesLocations = question.map(
      (cur) => (
        <li key={cur}>{cur}</li>
      )
    );
  }

  if(props.isLoading) {
    return(
      <div className="questions">
        <h2 className="comprehension-questions">Comprehension Questions</h2>
        <form onSubmit={(event) => handleSubmit(event, questionText)} className="question-form">
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
          <input type="text" placeholder="Enter Question..." onChange={handleChange} id="question-box"/>
          <input type="submit" value="Submit" id="question-submit"/>
          <div id="qa-div">
            <img id="qa-spinner" src={spinner} alt="loading" />
          </div>
        </form>
      </div>
    );
  } else if(question) {


    /*Added this new return statement */
    if(questionType === "button") {
      return(
        <div className="questions">
          <h2 className="comprehension-questions">Comprehension Questions</h2>
          <form onSubmit={(event) => handleSubmit(event, questionText)} className="question-form">
            <button
              id="names-button"
              className="question-buttons"
              onClick={(event) => questionChange(event, "names")}>
              What names are mentioned?
            </button>
            <button
              id="locations-button"
              className="question-buttons"
              onClick={(event) => questionChange(event, "locations")}>
              What locations are mentioned?
            </button><br/>
            <input type="text" placeholder="Enter Question..." onChange={handleChange} id="question-box"/>
            <input type="submit" value="Submit" id="question-submit"/><br/>
            <h3>Answer</h3>
            <div id="answers">
              <p>
                <ol>
                  {namesLocations}
                </ol>
              </p>
            </div>
          </form>
        </div>
      );
    }


    return(
      <div className="questions">
        <h2 className="comprehension-questions">Comprehension Questions</h2>
        <form onSubmit={(event) => handleSubmit(event, questionText)} className="question-form">
          <button
            id="names-button"
            className="question-buttons"
            onClick={(event) => questionChange(event, "names")}>
            What names are mentioned?
          </button>
          <button
            id="locations-button"
            className="question-buttons"
            onClick={(event) => questionChange(event, "locations")}>
            What locations are mentioned?
          </button><br/>
          <input type="text" placeholder="Enter Question..." onChange={handleChange} id="question-box"/>
          <input type="submit" value="Submit" id="question-submit"/><br/>
          <h3>Answer</h3>
          <div id="answers">
            <p>{question}</p>
          </div>
        </form>
      </div>
    );
  }
  return(
    <div className="questions">
      <h2 className="comprehension-questions">Comprehension Questions</h2>
      <form onSubmit={(event) => handleSubmit(event, questionText)} className="question-form">
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
        <input type="text" placeholder="Enter Question..." onChange={handleChange} id="question-box"/>
        <input type="submit" value="Submit" id="question-submit"/>
      </form>
    </div>
  );
}

export default Questions;
