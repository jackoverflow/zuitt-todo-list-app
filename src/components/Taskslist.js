import React from "react";
import Task from "./Task";
import { useState } from "react";

function TasksList() {
  const taskItemList = [
    "Follow Edukasyon.ph on Facebook",
    "Follow AWS Siklab Pilipinas on Facebook",
    "Follow Zuitt Coding Bootcamp on Facebook",
    "Follow Zuitt Coding Bootcamp on Instagram",
  ];

  const [taskValue, setTaskValue] = useState("Just another task");
  console.log("taskValue:", taskValue);

  const inputChangeHandler = (e) => {
    setTaskValue(e.target.value);
  };

  return (
    <div>
      <input
        className="task-input"
        placeholder="Create a new task"
        onChange={inputChangeHandler}
      />
      <ul>
        {taskItemList.map((task, index) => {
          return <Task key={index} taskName={task} />;
        })}
      </ul>
    </div>
  );
}

export default TasksList;
