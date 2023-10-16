import { TaskList } from "./components/TaskList/TaskList";
import { useState, useCallback } from "react";
import { TaskInput } from "./components/TaskInput/TaskInput";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { name: "Task 1" },
    { name: "Task 2" },
    { name: "Task 3" },
  ]);
  const [taskText, setText] = useState([]);

  const handleAdd = useCallback(
    (taskInputText) => {
      setText([...taskText, taskInputText]);
    },
    [taskText]
  );

  const onDeleteTask = useCallback(
    (index) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    },
    [tasks]
  );
  return (
    <div>
      <h1 className="title">Add new information</h1>
      <TaskInput onAdd={handleAdd} />
      <TaskList tasks={tasks} onDeleteTask={onDeleteTask} />
    </div>
  );
};
export default App;
