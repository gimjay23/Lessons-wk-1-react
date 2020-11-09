import React from "react";
import NewComponent from "./NewComponent";

function FirstComponent(props) {
  return (
    <div className="component-styling">
      <NewComponent />
      {props.children}
      <p>This is a custom component</p>
      <p>Another Paragraph</p>
    </div>
  );
}

export default FirstComponent;
