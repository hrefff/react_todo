import './App.css';
import { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { nanoid } from 'nanoid';

const header_text = 'My todo App';

const initial_tasks = [
  { id: '1', text: 'Todo 1' },
  { id: '2', text: 'Todo 2' },
  { id: '3', text: 'Todo 3' },
];

function App() {
  const [tasks, setTasks] = useState(initial_tasks);

  function addTask(text) {
    const newTask = { id: nanoid(), text: text };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const filteredTasks = tasks.filter((item) => id !== item.id);
    setTasks(filteredTasks);
  }

  return (
    <div className="App">
      <h1>{header_text}</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
