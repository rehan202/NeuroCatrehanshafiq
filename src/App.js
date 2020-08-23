import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Q2 from "./Q2/q2.js";
import Q3 from "./Q3/q3.js";

function callBackFunctionButton() {
  alert("I am button and I am clicked.");
  console.log('I am button and I am clicked.');
}

function callBackFunctionTextBox(p) {
  alert("Hello! I am an parent component. Child Component changed and value passed to me and value is = " + p);
  console.log("Hello! I am an parent component. Child Component changed and value passed to me and value is = " + p);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Q2
          isBlock="false"
          isDisabled="false"
          isDanger="false"
          name="My Button"
          onClick={callBackFunctionButton}
        />

        <br />

        <Q3
          value="Please enter your name."
          onClick={callBackFunctionTextBox}
        />
      </header>
    </div>
  );
}

export default App;
