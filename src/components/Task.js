import React from "react";

function Task({item}) {
  return (
    <div className="task">
      <div className="label">{item.category}</div>
      <div className="text">{item.text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
