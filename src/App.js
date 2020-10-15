import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

//imported components
//import Counter from "./Counter";

function App() {
  const [starWarsCharacter, setStarWarsCharacter] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(true); //because each time the page is actually loading; also replaces the ? in front of the starWarsCharacter

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/1")
      .then((res) => {
        console.log(res.data);
        setStarWarsCharacter(res.data); //We initially logged this into the console but now want it shown in the browser
        setIsPageLoading(false); // simply because we want the page to stop loading after api fetch
      })
      .catch((err) => console.error(err));
  }, []); //This [] ensures that when the api is fetched, it is run ONLY ONCE. You could also append an element, eg, a button, into the [] so it controls when the api is run.

  return (
    <div className="main">
      {isPageLoading === true ? (
        <p>Star Wars Character Details is Loading. Please Wait</p>
      ) : (
        <div>
          <p>{starWarsCharacter.name}</p>
          <p>{starWarsCharacter.eye_color}</p>
          <p>{starWarsCharacter.height}</p>
          <p>{starWarsCharacter.birth_year}</p>
          <p>{starWarsCharacter.films[0]}</p>
          <p>{starWarsCharacter.gender}</p>
          <p>{starWarsCharacter.mass}</p>
          <p>{starWarsCharacter.hair_color}</p>
        </div>
      )}
      <hr style={{backgroundColor: "white"}}/>
      {/**<Counter />*/}
    </div>
  );
}

export default App;
