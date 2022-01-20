import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// my first component

const App = () => {
    return (
    	<div className="app">
        <header className="app-header">
            <h1>My Amazing ToDo-List App</h1>
            <p>The most simple and amazing todo-list React App.</p>
        </header>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById("root"));