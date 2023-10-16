import { useRef, useState } from "react";
import PropTypes from "prop-types";

export const TaskInput = ({ onAdd }) => {
  const inputRef = useRef(null);
  const [taskText, setTaskText] = useState("");
  const [error, setError] = useState("");

  const handleAddTask = () => {
    if (taskText.trim().length === 0) {
      setError("The task text cannot be empty.");
      return;
    }

    onAdd(taskText);
    setTaskText("");
    inputRef.current.focus();
    setError("");
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleAddTask}>Add</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

TaskInput.propTypes = {
  onAdd: PropTypes.func,
};
