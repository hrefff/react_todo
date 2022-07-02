import React from 'react';
import Task from './Task';

function TaskList(props) {
  return (
    <>
      {props.tasks.map((item) => (
        <Task key={item.id} item={item} deleteTask={props.deleteTask} />
      ))}
    </>
  );
}

export default TaskList;
