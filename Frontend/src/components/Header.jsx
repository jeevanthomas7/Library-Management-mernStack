import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const LOGO = "data:image/png;base64,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";

  return (
    <header className="w-full bg-white/60 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO} alt="logo" className="w-10 h-10 object-cover rounded-md" />
          <div>
            <div className="text-xl font-extrabold text-indigo-900">Book Library</div>
            <div className="text-xs text-slate-500">Discover · Request · Read</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <Link to="/" className="text-sm text-slate-700 hover:text-indigo-700">Home</Link>
          <Link to="/books" className="text-sm text-slate-700 hover:text-indigo-700">Book Store</Link>
          <a href="#contact" className="text-sm text-slate-700 hover:text-indigo-700">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/books" className="hidden sm:inline-block px-3 py-2 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700">
            Browse Store
          </Link>
          <button className="p-2 rounded-md bg-slate-50 border border-slate-100 text-slate-600 hover:bg-slate-100">Sign in</button>
        </div>
      </div>
    </header>
  );
}
