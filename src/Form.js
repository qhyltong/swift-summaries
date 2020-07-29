import React, {useState} from 'react';
import './App.css';

function Form(props) {
  const [currentText, changeCurrent] = useState(null);
  const [summarySize, changeSize] = useState(null);
  const [inputFile, uploadFile] = useState(null);
  const [textText, changeTextText] = useState(null);

  function handleChange(event) {
    changeCurrent(event.target.value);
  }

  function handleSelection(event) {
    event.preventDefault();
    changeSize(event.target.value);
  }

  function handleFileUpload(event) {
    const files = event.target.files;
    uploadFile(files[0]);

    //add line below after API call, it might need to be in a .then
    //changeTextText([var_name of_text]);
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
        <textarea value={textText} onChange={handleChange}></textarea><br/>
        <div className="submission-button-area">
          <label onChange={handleFileUpload} className="custom-file-upload">
              <input type="file"/>
              Upload Image
          </label>
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
