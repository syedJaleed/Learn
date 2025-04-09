import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-200 flex gap-4">
      <Link to="/">🏠 Home</Link>
      <Link to="/users">👥 Users</Link>
      <Link to="/dashboard">📊 Dashboard</Link>
      <Link to="/login">🔑 Login</Link>
    </nav>
  );
}