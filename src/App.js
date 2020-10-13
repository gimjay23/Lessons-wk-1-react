import React from "react";
import "./App.css";

//imported components
import Counter from "./Counter";
import Namer from "./Namer";

function App() {

  return (
    <div className="main">
      <Counter />
      <br />
      <Namer />
    </div>
  );
}

export default App;
