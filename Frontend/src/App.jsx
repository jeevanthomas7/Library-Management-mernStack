import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import Books from "./components/books";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <Header />
        <main className="pt-8 pb-12">
          <div className="max-w-6xl mx-auto px-4">
            <Routes>
              <Route path="/" element={<BookList />} />
              <Route path="/books" element={<Books />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
