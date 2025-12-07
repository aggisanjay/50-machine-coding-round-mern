import { useEffect, useState } from "react";
import API from "./services/api";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./index.css";

function App() {
  const [books, setBooks] = useState(null);
  const [editBook, setEditBook] = useState(null);

  const fetchBooks = async () => {
    const res = await API.get("/");
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <h1 className="title">📚 Books Manager</h1>

      <BookForm
        refresh={fetchBooks}
        editBook={editBook}
        setEditBook={setEditBook}
      />

      <BookList
        books={books}
        onEdit={setEditBook}
        refresh={fetchBooks}
      />
    </div>
  );
}

export default App;
