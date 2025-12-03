import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import './index.css'
export default function App() {
  const [activeTab, setActiveTab] = useState("register");
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setActiveTab("login");
  };

  return (
    <div className="app">
      <div className="card">

        <h1 className="title">MERN Auth App</h1>

        <div className="tabs">
          {["register", "login", "profile"].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}

          {token && (
            <button onClick={logout} className="tab-btn logout">
              LOGOUT
            </button>
          )}
        </div>

        {activeTab === "register" && <Register />}
        {activeTab === "login" && <Login setToken={setToken} />}
        {activeTab === "profile" && <Profile token={token} />}

      </div>
    </div>
  );
}
