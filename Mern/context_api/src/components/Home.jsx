import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function Home() {
    const { user, login, darkMode } = useContext(AppContext);
    const [username, setUsername] = useState("");
  return (
    <div className={`h-screen flex flex-col items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {user ? (
        <h2 className="text-2xl">Welcome, {user.name}! 🎉</h2>
      ) : (
        <>
          <h2 className="text-2xl">Login</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 mt-2"
          />
          <button
            onClick={() => login(username)}
            className="ml-2 bg-green-500 px-4 py-2 text-white rounded"
          >
            Login
          </button>
        </>
      )}
    </div>
  )
}

export default Home