import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const API = import.meta.env.VITE_API_URL;

  const PLACEHOLDER = "/mnt/data/ecb570d5-afc4-4e6b-b912-ff622c97b53a.png";

  const fetchBooks = async () => {
    try {
      setError("");
      setLoading(true);
      const res = await axios.get(`${API}/books`);
      setBooks(res.data || []);
    } catch (err) {
      setError("Failed to load books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleBookNow = (book) => {
    setToast(`Your request for "${book.title}" has been submitted successfully`);
    setModalOpen(true);
    setTimeout(() => setToast(""), 3500);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold flex items-center gap-3 text-indigo-900">
          <span className="text-2xl justify-center text-center">📚</span> Book Library
        </h1>

        <div className="flex items-center gap-2">
          <button
            onClick={fetchBooks}
            className="px-3 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 transition"
          >
            Refresh
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-500">Loading books…</div>
      ) : error ? (
        <div className="text-center py-6 text-red-600">{error}</div>
      ) : books.length === 0 ? (
        <div className="text-center py-12 text-slate-500">No books found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <article
              key={book._id}
              className="bg-white border border-slate-100 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
            >
              <div className="h-56 bg-slate-100 overflow-hidden">
                <img
                  src={book.coverUrl || PLACEHOLDER}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = PLACEHOLDER;
                  }}
                />
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <div className="mb-2">
                  <h3 className="font-semibold text-lg text-indigo-900 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-slate-500">{book.author}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 text-xs text-slate-600 mb-2">
                    {book.genre && (
                      <span className="px-2 py-1 bg-indigo-50 text-indigo-800 rounded">
                        {book.genre}
                      </span>
                    )}
                    {book.year && (
                      <span className="px-2 py-1 bg-slate-100 rounded">
                        {book.year}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-700 line-clamp-3">
                    {book.description || "No description provided."}
                  </p>

                  <div className="mt-3">
                    <button
                      onClick={() => handleBookNow(book)}
                      className="w-full px-3 py-2 mt-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg shadow hover:from-indigo-600 hover:to-indigo-700 transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {toast && (
        <div className="fixed right-5 top-5 z-50">
          <div className="bg-green-600 text-white px-4 py-2 rounded shadow-lg flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <div className="text-sm">{toast}</div>
          </div>
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />
          <div className="relative bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-green-100 rounded-full p-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-indigo-900">Request submitted</h3>
              <p className="text-sm text-slate-600">
                Your request has been submitted successfully.
              </p>

              <div className="w-full flex gap-3">
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setToast("");
                  }}
                  className="flex-1 px-4 py-2 border rounded-md hover:bg-slate-50"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    setModalOpen(false);
                  }}
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
