import API from "../services/api";
import { Button } from "./UI";
import { Pencil, Trash } from "lucide-react";
import '../index.css'
export default function BookList({ books, onEdit, refresh }) {

  const deleteBook = async id => {
    await API.delete(`/${id}`);
    refresh();
  };

  return (
    <div className="grid">
      {books?.map(book => (
        <div className="card" key={book._id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>₹ {book.price}</p>
          <p>{book.publishedYear}</p>

          <div className="actions">
            <Button onClick={() => onEdit(book)}>
              <Pencil size={16} /> Edit
            </Button>

            <Button variant="danger" onClick={() => deleteBook(book._id)}>
              <Trash size={16} /> Delete
            </Button>
          </div>

        </div>
      ))}
    </div>
  );
}
