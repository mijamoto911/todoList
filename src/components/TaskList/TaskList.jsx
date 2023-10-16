import { useMemo } from "react";
import PropTypes from "prop-types";

export const TaskList = ({ tasks, onDeleteTask }) => {
  const taskItems = useMemo(() => {
    return tasks.map((task, index) => (
      <div key={index}>
        {task.name}
        <button onClick={() => onDeleteTask(index)}>Delete</button>
      </div>
    ));
  }, [tasks, onDeleteTask]);

  return (
    <div>
      <h1 className="title">List of commands</h1>
      {taskItems}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  onDeleteTask: PropTypes.func,
};
