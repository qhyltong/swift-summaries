import React from 'react';
import './App.css';

function NavBar() {
  return(
    <div id="nav">
      <h1>Swift Summaries</h1>
      <span id="info-spot">
        <a href="#" id="info-button">Info</a> <br/>
        <div className="info-area">
          Instructions will go here
          when we know what we want to put.
          More instructions and bullet points
          and stuff, explaining features
        </div>
      </span>
    </div>
  );
}

export default NavBar;
