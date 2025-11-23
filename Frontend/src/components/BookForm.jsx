import React, { useEffect, useState } from "react";

const empty = {
  title: "",
  author: "",
  year: "",
  genre: "",
  coverUrl: "",
  description: "",
};

export default function BookForm({ onSave, editing, onUpdate, onCancel }) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    if (editing) {
      setForm({
        title: editing.title,
        author: editing.author,
        year: editing.year ? String(editing.year) : "",
        genre: editing.genre || "",
        coverUrl: editing.coverUrl || "",
        description: editing.description || "",
      });
    } else {
      setForm(empty);
    }
  }, [editing]);

  const submit = (e) => {
    e.preventDefault();

    const payload = { ...form, year: form.year ? Number(form.year) : undefined };

    if (editing) onUpdate(editing._id, payload);
    else onSave(payload);

    setForm(empty);
  };

  return (
    <form
      onSubmit={submit}
      className="bg-slate-50 border border-slate-200 p-4 rounded-lg shadow-sm"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="title"
          className="p-2 border rounded-md"
          placeholder="Title *"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <input
          name="author"
          className="p-2 border rounded-md"
          placeholder="Author *"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          required
        />

        <input
          name="year"
          className="p-2 border rounded-md"
          placeholder="Year"
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
        />

        <input
          name="genre"
          className="p-2 border rounded-md"
          placeholder="Genre"
          value={form.genre}
          onChange={(e) => setForm({ ...form, genre: e.target.value })}
        />

        <input
          name="coverUrl"
          className="p-2 border rounded-md col-span-1 sm:col-span-2"
          placeholder="Cover Image URL"
          value={form.coverUrl}
          onChange={(e) => setForm({ ...form, coverUrl: e.target.value })}
        />

        <textarea
          name="description"
          className="p-2 border rounded-md col-span-1 sm:col-span-2"
          placeholder="Short description"
          rows="3"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>
      </div>

      <div className="mt-3 flex gap-2 justify-center">
      <button className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center justify-center w-full sm:w-auto">
  {editing ? "Update" : "Add Book"}
</button>

        {editing && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border rounded-md"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
