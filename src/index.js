import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// my first component

const App = () => {
	const paraStyle = {
		"marginBottom":"15px"
	}
    return (
    	<div className="app">
        <header className="app-header">
            <h1>My Amazing ToDo-List App</h1>
            <p style={paraStyle}>The most simple and amazing todo-list React App.</p>
            <ul>
            	<li className="tasks-item">Follow Edukasyon.ph on Facebook</li>
            	<li className="tasks-item">Follow AWS Siklab Pilipinas on Facebook</li>
            	<li className="tasks-item">Follow Zuitt Coding Bootcamp on Facebook</li>
            </ul>
        </header>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById("root"));