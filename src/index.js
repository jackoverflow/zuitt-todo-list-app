import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// my first component
function Task(props) {
  return <li className="tasks-item">{props.taskName}</li>;
}

function TaskList() {
  const taskItemList = [
    "Follow Edukasyon.ph on Facebook",
    "Follow AWS Siklab Pilipinas on Facebook",
    "Follow Zuitt Coding Bootcamp on Facebook",
    "Follow Zuitt Coding Bootcamp on Instagram",
  ];
  return (
    <div>
      <input className="task-input" />
      <ul>
        {taskItemList.map((task, index) => {
          return <Task key={index} taskName={task} />;
        })}
      </ul>
    </div>
  );
}

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
        <TaskList />
      </header>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
