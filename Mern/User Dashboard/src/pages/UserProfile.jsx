import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams();
  return <h1>👤 User Profile - ID: {id}</h1>;
}