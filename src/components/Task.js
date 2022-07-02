import React from 'react';

function Task(props) {
  return (
    <div id={props.item.id}>
      {props.item.text}{' '}
      <a href="#" onClick={() => props.deleteTask(props.item.id)}>
        [delete]
      </a>
    </div>
  );
}

export default Task;
