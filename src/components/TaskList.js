import React from "react";
import Task from "./Task";

function TaskList({tasks,deletedItem}) {
  const items= tasks.map((task) => {
   return <Task
   deletedItem={deletedItem}
    key={task.text}
    category={task.category}
    text={task.text}
    />
  })
  
  return (
    <div className="tasks">
      {items}
    </div>
  );
}

export default TaskList;
