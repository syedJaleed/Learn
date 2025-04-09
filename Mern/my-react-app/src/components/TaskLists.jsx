import React from 'react'

function TaskLists({ tasks, toggleTask, removeTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex justify-between items-center p-2 border rounded ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          <span onClick={() => toggleTask(task.id)} className="cursor-pointer">
            {task.text}
          </span>
          <button
            onClick={() => removeTask(task.id)}
            className="bg-red-500 text-white px-2 rounded"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TaskLists