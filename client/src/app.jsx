import React, { useState, useEffect } from 'react';
import Introduction from './components/introduction.jsx';
import ReactDOM from 'react-dom';

function App(props) {

  // useEffect();

  return (
    <div>
      <div id='pageHeader'>
        <div id='title'>CSC Project 1 PHP</div>
      </div>
      <div id='componentContainer'>
        <Introduction/>
      </div>
    </div>
  );

}

ReactDOM.render(<App />, document.getElementById('app'));