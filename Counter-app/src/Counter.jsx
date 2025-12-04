import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Counter</h1>

        <div style={styles.number}>{count}</div>

        <div style={styles.buttonGroup}>
          <button style={styles.btn} onClick={() => setCount(count - 1)}>
            -
          </button>

          <button style={styles.resetBtn} onClick={() => setCount(0)}>
            Reset
          </button>

          <button style={styles.btn} onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    width: "280px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },
  heading: {
    marginBottom: "20px",
  },
  number: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  btn: {
    flex: 1,
    padding: "10px 0",
    fontSize: "20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#667eea",
    color: "#fff",
  },
  resetBtn: {
    flex: 1,
    padding: "10px 0",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#e53e3e",
    color: "#fff",
  },
};
