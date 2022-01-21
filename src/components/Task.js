import React from "react";
function Task(props) {
  return <li className="tasks-item">{props.taskName}</li>;
}
export default Task;
