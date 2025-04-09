import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    alert("Logged in! Redirecting...");
    navigate("/dashboard");
  }

  return <button onClick={handleLogin}>🔑 Login</button>;
}