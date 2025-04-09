import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Navbar() {

  const {darkMode, toggleTheme, logout, user} = useContext(AppContext);

  return (
    <nav className={`p-4 flex justify-between ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
    <h1 className="text-xl font-bold">MyApp</h1>

    <div className="flex items-center gap-4">
      {/* Theme Toggle Button */}
      <button onClick={toggleTheme} className="bg-blue-500 px-3 py-1 rounded">
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>

      {/* Authentication Section */}
      {user ? (
        <>
          <span>👤 {user.name}</span>
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
        </>
      ) : (
        <span>🔒 Not Logged In</span>
      )}
    </div>
  </nav>
  )
}

export default Navbar

