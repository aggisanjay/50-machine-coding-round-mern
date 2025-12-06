import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:4000/api/tasks";

 const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [editId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

 
  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const res = await axios.post(API_URL, { title });
    setTasks([res.data, ...tasks]);
    setTitle("");
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  const toggleTask = async (id) => {
    const res = await axios.patch(`${API_URL}/${id}`);
    setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
  };

  const saveEdit = async (id) => {
    if (!editTitle.trim()) return;

    const res = await axios.put(`${API_URL}/${id}`, {
      title: editTitle
    });

    setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
    setEditingId(null);
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "ACTIVE") return !t.completed;
    if (filter === "COMPLETED") return t.completed;
    return true;
  });
 
   useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={styles.page}>
    <div style={styles.card}>
      <h1 style={styles.title}>✅ To-Do Manager</h1>

      <form onSubmit={addTask} style={styles.form}>
        <input
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <button style={styles.addBtn}>Add</button>
      </form>

      <div style={styles.filters}>
        {["ALL", "ACTIVE", "COMPLETED"].map((f) => (
          <button
            key={f}
            style={filter === f ? styles.activeFilter : styles.filter}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <ul style={styles.list}>
        {filteredTasks.map((task) => (
          <li key={task._id} style={styles.task}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task._id)}
            />

            {editId === task._id ? (
              <input
                autoFocus
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                onBlur={() => saveEdit(task._id)}
                style={styles.editInput}
              />
            ) : (
              <span
                onDoubleClick={() => {
                  setEditId(task._id);
                  setEditTitle(task.title);
                }}
                style={{
                  ...styles.taskTitle,
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "#9CA3AF" : "#111827"
                }}
              >
                {task.title}
              </span>
            )}

            <button onClick={() => deleteTask(task._id)} style={styles.delBtn}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default App

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F3F4F6",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    paddingTop: "40px"
  },

  card: {
    width: "100%",
    maxWidth: "450px",
    backgroundColor: "#FFFFFF",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
  },

  title: {
    textAlign: "center",
    marginBottom: "18px",
    fontSize: "26px",
    fontWeight: "700",
    
  },

  form: {
    display: "flex",
    gap: "8px",
    marginBottom: "14px"
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
    outline: "none",
    fontSize: "14px"
  },

  addBtn: {
    backgroundColor: "#2563EB",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 14px",
    cursor: "pointer"
  },

  filters: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    margin: "14px 0"
  },

  filter: {
    padding: "6px 12px",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#E5E7EB"
  },

  activeFilter: {
    padding: "6px 12px",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#2563EB",
    color: "#FFFFFF"
  },

  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "16px"
  },

  task: {
    display: "flex",
    gap: "12px",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #E5E7EB",
    backgroundColor: "#FFFFFF"
  },

  taskTitle: {
    flex: 1,
    cursor: "pointer"
  },

  editInput: {
    flex: 1,
    borderRadius: "6px",
    border: "1px solid #D1D5DB",
    padding: "5px"
  },

  delBtn: {
    background: "none",
    border: "none",
    fontSize: "16px",
    color: "#EF4444",
    cursor: "pointer"
  }
};
