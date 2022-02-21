import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App(props) {

  // useEffect();

  return (
    <div>
      <div id='pageHeader'>
        <div id='title'>CSC Project 1 PHP</div>
      </div>
      <div id='componentContainer'>
      </div>
    </div>
  );

}

ReactDOM.render(<App />, document.getElementById('app'));