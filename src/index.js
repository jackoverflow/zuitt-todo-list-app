import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import TasksList from "./components/Taskslist";

const App = () => {
  const paraStyle = {
    marginBottom: "15px",
    color: "orangered",
  };
  const blue = {
    color: "lightblue",
  };
  return (
    <div className="app">
      <header className="app-header">
        <h1 style={blue}>My Amazing ToDo-List App</h1>
        <p style={paraStyle}>
          The most simple and amazing todo-list React App.
        </p>
        <TasksList />
      </header>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
