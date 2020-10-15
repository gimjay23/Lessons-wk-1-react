import React, { useState } from "react"; // Append Component only if you desire to use class components instead of functions,i.e export default class Counter extends Component {}

function Counter(props) {
  const [count, setCount] = useState(0); //useState once used, will treat the first data as a variable and the second as a function to change the variable's value
  const [userLoggedIn, setUserLoggedIn] = useState (true); //useState to track if a user is logged in

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1); //You could also use return count - 1 and it will work
  }

  function logout () {
    setUserLoggedIn (false);
  }

  //OPTION II -- CONDITIONAL RENDERING -- TENERY STATEMENT
  function exampleIfElse () {
    if (count === 0) {
      console.log('Count is nothing')
    } else {
      console.log('Count has moved')

      //Syntatic sugar form of above becomes
      count === 0 ? console.log('Count is nothing') : console.log('Count has moved');
    }

  }

  function printName (name) {
    console.log (name);
  }

  return (
    <div>
      {userLoggedIn === true && <p>Hello User!</p>} {/*conditional rendering for tracking users logged in */}
      {userLoggedIn === false && <p>Please Sign Up for an Account</p>} {/*conditional rendering for tracking users logged out */}
      {/**USE ABOVE TWO STATEMENTS OR JUST THE ONE BELOW FOR BOTH */}
      {userLoggedIn === false ? <p>Please Sign Up for an Account</p> : <p>Hello User!</p> } {/*syntatic sugar conditional rendering form of tracking users logged in and out */}


      <button onClick={Increment} onMouseMove={() => printName("Daniel")}>Increment</button> {/*onClick is a click eventHandler */}
      <p>{count}</p>
      <button onClick={Decrement} onMouseMove={exampleIfElse}>Decrement</button>
      <br />

      {/**Conditional rendering to show a message of count being greater than 10 or less than 0 when such counts are reached */}
      {/**OPTION 1*/}
      {count < 0 && <p>Count is now lesser than 0</p>}{" "}
      {/**This reads: If count is less than 0, then (&&) show the paragraph that says "Count is now lesser than 0" */}
      {count > 10 && <p>Count is now greater than 10</p>}
      <br />
      <button onClick={logout}>Log Out</button> {/**creating a log out button */}
    </div>
  );
}

export default Counter;
