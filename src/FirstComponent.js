import React from "react";
import NewComponent from "./NewComponent";

export function functionIwantToExport() {
  console.log("I want to export this to the browser");
}

function FirstComponent() {
  return (
    <>
      <NewComponent />
      <p>This is a custom component</p>
      <p>Another Paragraph</p>
    </>
  );
}

export default FirstComponent;
