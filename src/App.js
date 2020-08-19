import React from 'react';
import logo from './logo.svg';
import './App.css';
import Q1 from  "./q1.js";
import Q2 from  "./q2.js";
import Q3 from  "./q3.js";


function clicked() {
  console.log('I am Clicked by Child element.');
}


function callBack(p) {
  console.log(p 
    + "osdskdos");
}

function App() {
 
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Q2 isBlock= "false"
            isDisabled="false"
            isDanger="true"
            name="Button Name"
            onClick={clicked}
        />
        <br/>
         <Q3 value="Write something here."
            onClick={callBack}
        />
     
      
      </header>
     

    </div>
  );
}

export default App;
