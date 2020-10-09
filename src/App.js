import React, { useState } from "react";
import "./App.css";

//imported components
import Counter from "./Counter";
import Namer from "./Namer";

function App() {
  const [someData, setSomeData] = useState("PreMEST Day 2");

  return (
    <div className="main">
      <Counter someData={someData} />
      <br />
      <Namer />
    </div>
  );
}

export default App;
