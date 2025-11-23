import React, { useEffect, useState } from "react";
import axios from "axios";
import BookForm from "./BookForm";
import BookItem from "./BookItem";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);

  const API = import.meta.env.VITE_API_URL;

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/books`);
      setBooks(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (book) => {
    const res = await axios.post(`${API}/books`, book);
    setBooks([res.data, ...books]);
  };

  const updateBook = async (id, updated) => {
    const res = await axios.put(`${API}/books/${id}`, updated);
    setBooks(books.map((b) => (b._id === id ? res.data : b)));
    setEditing(null);
  };

  const deleteBook = async (id) => {
    if (!confirm("Delete this book?")) return;
    await axios.delete(`${API}/books/${id}`);
    setBooks(books.filter((b) => b._id !== id));
  };

  return (
    <div className="space-y-6">
      <BookForm
        onSave={addBook}
        editing={editing}
        onUpdate={updateBook}
        onCancel={() => setEditing(null)}
      />

      {loading ? (
        <div className="text-center text-slate-500 py-10">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookItem
              key={book._id}
              book={book}
              onEdit={() => setEditing(book)}
              onDelete={() => deleteBook(book._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
