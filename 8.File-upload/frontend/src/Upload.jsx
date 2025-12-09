import { useState } from "react";
import "./index.css";

export default function Upload() {
  const [file, setFile] = useState(null);

  const submitHandler = async () => {
    if (!file) return alert("Select a file");

    const formData = new FormData();
    formData.append("file", file);

    await fetch("http://localhost:5000/api/upload", {
      method: "POST",
      body: formData,
    });

    alert("Upload successful ✅");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Upload File</h2>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button onClick={submitHandler}>
          Upload
        </button>
      </div>
    </div>
  );
}
