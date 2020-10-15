import React from "react";
import "./App.css";
import FirstComponent, { functionIwantToExport } from "./FirstComponent";

//imported components
import Counter from "./Counter";
//import Namer from "./Namer";

function App() {
  functionIwantToExport();

  return (
    <div className="main">
      <Counter />
      <FirstComponent />
    </div>
  );
}

export default App;
