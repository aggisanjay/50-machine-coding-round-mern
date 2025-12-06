import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

export default function UsersTable() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then(res => setUsers(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="loader">Loading users...</div>;
  }

  return (
    <div className="page">
      <div className="card">

        <h1>User Management</h1>

        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}
