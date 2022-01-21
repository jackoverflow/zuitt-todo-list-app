import React from "react";
import Task from "./Task";

function TasksList() {
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

export default TasksList;
