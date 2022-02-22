import React, { useState, useEffect } from 'react';
import Introduction from './components/introduction.jsx';

import ErrorDemo from './components/errorDemo.jsx';
import ErrorDemoRaw from './components/phpItems/errorDemo.txt';

import SyntaxDemo from './components/syntaxDemo.jsx';
import SyntaxDemoRaw from './components/phpItems/syntaxDemo.txt';

import VarDeclare from './components/varDeclare.jsx';
import VarDeclareRaw from './components/phpItems/varDeclareDeleteDemo.txt';

import DataType from './components/dataType.jsx'
import DataTypeRaw from './components/phpItems/dataTypeDemo.txt';

import OperatorsDemo from './components/operatorsDemo.jsx';
import OperatorsDemoRaw from './components/phpItems/operatorsDemo.txt';

import GuessingGame from './components/guessingGame.jsx'
import GuessingGameRaw from './components/phpItems/guessingGame.txt';

import ColorPicker from './components/colorPicker.jsx';
import ColorPickerRaw from './components/phpItems/colorPicker.txt';

import Factorial from './components/factorial.jsx';
import FactorialRaw from './components/phpItems/factorial.txt';

import ReactDOM from 'react-dom';

function App(props) {

  // useEffect();

  return (
    <div>
      <div id='pageHeader'>
        <div id='title'>CSC Project 1 PHP</div>
      </div>
        <Introduction/>
      <div id='componentContainer'>
        <ErrorDemo file={ErrorDemoRaw}/>
        <SyntaxDemo file={SyntaxDemoRaw}/>
        <VarDeclare file={VarDeclareRaw}/>
        <DataType file={DataTypeRaw}/>
        <OperatorsDemo file={OperatorsDemoRaw}/>
        <GuessingGame file={GuessingGameRaw}/>
        <ColorPicker file={ColorPickerRaw}/>
        <Factorial file={FactorialRaw}/>
      </div>
    </div>
  );

}

ReactDOM.render(<App />, document.getElementById('app'));