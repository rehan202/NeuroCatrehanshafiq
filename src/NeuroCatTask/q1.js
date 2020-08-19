import React from 'react'

function q1() {

  a();
  function a() {

    console.log("result");
  }

  return (

    <div>
      <h3>Above mentioned will work. Because as you can see i have defined a function a() and Log a message using it.
      I have call that function in my component. Functions declared with the following syntax are not executed
      immediately. They are "saved for later use" and will be executed later, when they are invoked
      (called upon). This type of function works if you call it BEFORE or AFTER where is has been defined.
      If you call a declaration function before it has been defined Hoisting works properly.
</h3>
    </div>
  );
}

export default q1;