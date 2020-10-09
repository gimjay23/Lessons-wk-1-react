import React, { useState } from "react"; // Append Component only if you desire to use class components instead of functions,i.e export default class Counter extends Component {}

function Counter(props) {
  const [count, setCount] = useState(0); //useState once used, will treat the first data as a variable and the second as a function to change the variable's value

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={Increment}>Increment</button> {/*onClick is a click eventHandler */}
      <p>{count}</p>
      <button onClick={Decrement}>Decrement</button>
      <br/>
      <p>{props.someData}</p>
    </div>
  );
}

export default Counter;
