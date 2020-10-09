import React, {useState} from 'react'; //telling react to import useState allows you to export any other state from a component, namely a namedExport

const name = "Alfred";

function NewComponent () {
    return <div>This is a new component is created by {name} </div>;
};

export default NewComponent;
