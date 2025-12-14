import { useEffect, useState } from "react";
import "./index.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchPosts();
  }, [page]);

  async function fetchPosts() {
    const res = await fetch(
      `http://localhost:5000/api/posts?page=${page}`
    );
    const data = await res.json();
    setPosts(data.posts);
    setTotalPages(data.totalPages);
  }

  async function createPost(e) {
    e.preventDefault();

    if (!title || !body) return;

    await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body, author }),
    });

    setTitle("");
    setBody("");
    setAuthor("");

    setPage(1);
    fetchPosts();
  }

  return (
    <div className="app">
      <h1>Posts</h1>

      {/* CREATE POST */}
      <form className="post-form" onSubmit={createPost}>
        <input
          placeholder="Post title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write something..."
          value={body}
          onChange={e => setBody(e.target.value)}
        />

        <input
          placeholder="Author (optional)"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />

        <button>Create Post</button>
      </form>

      {/* READ POSTS */}
      <div className="post-grid">
        {posts.map(post => (
          <div className="post-card" key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <span className="meta">
              {post.author || "Anonymous"} •{" "}
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        <span>{page} / {totalPages}</span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
