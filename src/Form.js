import React, {useState} from 'react';
import './App.css';

function Form(props) {
  const [currentText, changeCurrent] = useState(null);
  const [summarySize, changeSize] = useState(null);

  function handleChange(event) {
    changeCurrent(event.target.value);
  }

  function handleSelection(event) {
    event.preventDefault();
    changeSize(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.changeText(currentText);
    props.changeSelection(summarySize);
  }

  function handleReset(event) {
    props.changeText(null);
    changeSize(null);
  }

  return(
    <div className="form-div">
      <h2>Enter Text Here</h2>
      <form className="form" onSubmit={handleSubmit}>
        <textarea onChange={handleChange}></textarea><br/>
        <div className="submission-button-area">
          <select onChange={handleSelection} className="select-selected" name="size">
            <option value="0">Summmary Size</option>
            <option value="25">25%</option>
            <option value="50">50%</option>
            <option value="75">75%</option>
          </select>
          <input id="resetText" onClick={handleReset} type="reset" value="Reset"/>
          <input id="submit" type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  );
}

export default Form;
