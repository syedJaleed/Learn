import { useEffect, useRef, useState } from 'react';
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskLists";
import './App.css'

function App() {

  const [tasks, setTasks] = useState([]);
  const [posts, setPosts] = useState([]);
  const inputRef = useRef(null);

  const addTask = (task) => {
    if(task.trim()){
      setTasks([...tasks,{ id: Date.now(), text: task, completed: false } ])
    }
  }

  const toggleTask = (id) =>{
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }

  useEffect(() => {
    getPosts();
    inputRef.current.focus();
  }, []); // Empty dependency array = Runs once (on mount)

  return (
   <>
     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </div>
    <div className="max-w-lg mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">📌 Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="border p-2 mb-2 rounded">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
    <div className="max-w-md mx-auto mt-10">
      <input
        ref={inputRef}
        type="text"
        className="border p-2 w-full"
        placeholder="Type here..."
      />
    </div>
   </>
  )
}

export default App
