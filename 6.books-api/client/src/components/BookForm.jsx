import { useEffect, useState } from "react";
import API from "../services/api";
import { Input, Button } from "./UI";
import { PlusCircle, Save } from "lucide-react";
import '../index.css'
export default function BookForm({ refresh, editBook, setEditBook }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    publishedYear: ""
  });

  useEffect(() => {
    if (editBook) setForm(editBook);
  }, [editBook]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitBook = async e => {
    e.preventDefault();

    if (editBook) {
      await API.put(`/${editBook._id}`, form);
      setEditBook(null);
    } else {
      await API.post("/", form);
    }

    setForm({ title: "", author: "", price: "", publishedYear: "" });
    refresh();
  };

  return (
    <form className="form" onSubmit={submitBook}>
      <Input name="title" placeholder="Title" value={form.title} onChange={handleChange}/>
      <Input name="author" placeholder="Author" value={form.author} onChange={handleChange}/>
      <Input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange}/>
      <Input name="publishedYear" type="number" placeholder="Year" value={form.publishedYear} onChange={handleChange}/>

      <Button type="submit">
        {editBook ? <Save size={18}/> : <PlusCircle size={18}/>}
        {editBook ? " Update" : " Add Book"}
      </Button>
    </form>
  );
}
