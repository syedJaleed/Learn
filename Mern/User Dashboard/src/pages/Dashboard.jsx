import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>📊 Dashboard</h1>
      <Link to="settings">⚙ Go to Settings</Link>
      <Outlet /> {/* Child route will render here */}
    </div>
  );
}