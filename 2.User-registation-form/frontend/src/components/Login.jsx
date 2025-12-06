import { useState } from "react";
import axios from "axios";
import '../index.css'
export default function Login({ setToken }) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/login",
        form
      );

      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);

      alert("Login successful!");
      setForm({ email: "", password: "" });
    } catch (err) {
      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        className="input"
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        className="input"
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <button className="btn">Login</button>
    </form>
  );
}
