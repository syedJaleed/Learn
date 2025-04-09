import { Link, useSearchParams } from "react-router-dom";

const userList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

export default function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredUsers = userList.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>👥 Users</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={e => setSearchParams({ search: e.target.value })}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
