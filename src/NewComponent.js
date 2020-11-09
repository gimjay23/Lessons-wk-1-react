import React from "react"; //telling react to import useState allows you to export any other state from a component, namely a namedExport

const name = "Alfred";

function NewComponent({ children, title }) {
  return (
    <div>
      <pre>
        <p>
          {title} by <h3>{name}</h3>
        </p>
      </pre>
    </div>
  );
}

export default NewComponent;
