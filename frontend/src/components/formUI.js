// import exp from "constants";
import { useState } from "react";

function BookForm({ book = {}, onSave }) {
  const [formData, setFormData] = useState({
    title: book.title || "",
    author: book.author || "",
    cover: book.cover || "",
    description: book.description || "",
    progress: book.progress || 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "progress" ? Number(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave?.(formData);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-slate-50 rounded-xl shadow p-8">
        <h2 className="text-3xl font-bold mb-6">
          {book.title ? "Edit Book" : "Add New Book"}
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Cover Image URL</label>
            <input
              type="text"
              name="cover"
              value={formData.cover}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300"
              rows={4}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Reading Progress (%)</label>
            <input
              type="number"
              name="progress"
              min="0"
              max="100"
              value={formData.progress}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              {book.title ? "Update Book" : "Add Book"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookForm;