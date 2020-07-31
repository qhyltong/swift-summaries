import React, {useState} from 'react';
import './App.css';
import spinner from './swinging.gif';

function Questions(props) {

  const [question, chooseQuestion] = useState(null);
  const [questionText, setText] = useState(null);
  const [questionType, changeType] = useState(null);

  /*Put this line here now*/
  let namesLocations = null;
  function questionChange(event, questionChoice) {
    event.preventDefault();
    chooseQuestion(questionChoice);
    changeType("button");

    /*After fetch add this and remove where I had it before*/
    /*I also changed App.css a little and I added a className to the ol
      element in the return statement */
    namesLocations = question.map(
      (cur) => (
        <li key={cur}>{cur}</li>
      )
    );
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event, questionText) {
    event.preventDefault();
    props.changeLoadingStatus(true);
    chooseQuestion(questionText);
    changeType("text");
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


    /*Changed this if statement */
    if(namesLocations !== null) {
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
                <ol className="phrase-list">
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
