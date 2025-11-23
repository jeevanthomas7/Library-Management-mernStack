import React from "react";

export default function BookItem({ book, onEdit, onDelete }) {
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
      <div className="h-44 bg-slate-200">
        {book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="h-full flex items-center justify-center text-slate-600">
            No Cover
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-lg">{book.title}</h3>
        <p className="text-sm text-slate-500">{book.author}</p>

        {book.genre && (
          <span className="inline-block mt-2 text-xs bg-slate-100 px-2 py-1 rounded">
            {book.genre}
          </span>
        )}

        {book.year && (
          <span className="inline-block mt-2 ml-2 text-xs bg-slate-100 px-2 py-1 rounded">
            {book.year}
          </span>
        )}

        <p className="text-sm text-slate-600 mt-2 line-clamp-3">
          {book.description}
        </p>

        <div className="mt-3 flex gap-2">
          <button
            onClick={onEdit}
            className="flex-1 px-3 py-2 border rounded-md hover:bg-slate-50"
          >
            Edit
          </button>

          <button
            onClick={onDelete}
            className="flex-1 px-3 py-2 bg-red-100 text-red-600 border border-red-200 rounded-md hover:bg-red-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
