import React, { useState } from 'react'

function TaskInput({ addTask }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask("");
      };
  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
    <input
      type="text"
      className="flex-grow p-2 border rounded-l"
      placeholder="Enter task..."
      value={task}
      onChange={(e) => setTask(e.target.value)}
    />
    <button type="submit" className="bg-blue-500 text-white px-4 rounded-r">
      Add
    </button>
  </form>
  )
}

export default TaskInput