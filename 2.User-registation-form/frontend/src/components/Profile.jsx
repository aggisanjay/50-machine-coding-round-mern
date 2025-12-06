import axios from "axios";
import { useState } from "react";

import '../index.css'

export default function Profile({ token }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const loadProfile = async () => {
    setError("");
    setUser(null);

    if (!token) {
      setError("Login required.");
      return;
    }

    try {
      const res = await axios.get("http://localhost:4000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUser(res.data);
    } catch {
      setError("Unauthorized or expired token.");
    }
  };

  return (
    <>
      <button className="btn" onClick={loadProfile}>
        Load Profile
      </button>

      {error && <p className="error">{error}</p>}

      {user && (
        <div className="profile-box">
          <p><strong>{user.name}</strong></p>
          <p>{user.email}</p>
          <p>ID: {user._id}</p>
        </div>
      )}
    </>
  );
}
