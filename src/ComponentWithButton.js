import React from "react";
import NewComponent from "./NewComponent";

//another way to write props is using destructuring, like below
export default function ComponentWithButton({ children }) {
  return (
    <div className="component-styling">
      {children}
      <button className="bg bg-primary text-white">Every Child Will Have Me</button>
      <br/>
      <br/>
      <NewComponent title={"This component is created"} />
      {/* we will pass the above props into the component Namer itself shortly */}
    </div>
  );
}
