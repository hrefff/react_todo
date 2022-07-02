import React from 'react';
import { useState } from 'react';

function AddTask(props) {
  const [text, setText] = useState('');

  function handleChangeText(e) {
    setText(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (text.trim() !== '') {
      props.addTask(text);
    }
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleChangeText} />
      <button type="submit">add</button>
    </form>
  );
}

export default AddTask;
