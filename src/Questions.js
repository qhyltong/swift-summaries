import React, {useState} from 'react';
import './App.css';
import spinner from './swinging.gif';

function Questions(props) {

  const [question, setQuestion] = useState(null); //inputText from textBox
  const [questionText, setText] = useState(null); //Handle Current Text
  const [isNamesLocations, setType] = useState(true); //handles if it is names/locations or text
  const [answer, changeAnswer] = useState(null); //Output from backend


  const formattedAnswer = answer.map(
    (cur) => (
      <li key="cur">{cur}</li>
    )
  );

/*
 * This function is for handling the button clicks
 */
  function questionChange(questionChoice, event) {
    event.persist();
    props.changeLoadingStatus(true);
    changeAnswer(null);
    changeType(true);
    //MAKE API CALL HERE
    //Vars you might need:
    //input text that they want summarized is props.inputText
    //which button they pressed is questionChoice (either "names" or "locations")
    //.thens needed (in this order)
    // changeAnswer(output from backend)
    // props.changeLoadingStatus(false)
    //end of function
  }

  function handleChange(event) {
    setText(event.target.value);
  }


  /*
   * This function is for handling text questions, you might have to add
   * in event.persist(), but you'll have to add that
   */
  function handleSubmit(questionText, event) {
    event.persist();
    props.changeLoadingStatus(true);
    changeAnswer(null);
    changeType(false);
    setQuestion(questionText);
    //MAKE API CALL HERE
    //vars you might need:
    //question is the question user asked
    //props.inputText is the text they want summarized
    //.thens needed (in this order)
    //changeAnswer(output from the backend)
    //props.changeLoadingStatus(false)
    //setText(null)
    //end of function
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
  } else if(answer) {
    if(isNamesLocations) {
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
                  {formattedAnswer}
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
            <p>{answer}</p>
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
