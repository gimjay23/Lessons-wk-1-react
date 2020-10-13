import React, { useState } from "react";

function Namer(props) {
  const [name, setName] = useState("Daniel");

  function toggleName() {
      if (name === "Daniel") {
          setName ("He is actually Daniel Asiedu & a cool guy too");
      } else {
          setName ("Daniel")
      };
  };

  return (
    <div>
      <button onClick={toggleName}>Toggle Name</button>
      <p>{name}</p>
    </div>
  );
}

export default Namer;
