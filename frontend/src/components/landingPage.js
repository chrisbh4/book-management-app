export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-gray-900">
      <header className="relative bg-white py-24 px-6 md:px-12 text-center overflow-hidden shadow-sm">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Organize Your Reading Life
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Track, manage, and discover books — all in one place.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-xl text-lg font-semibold hover:bg-gray-100 transition">
              Live Demo
            </button>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none">
          <img
            // src="/mockup-dashboard.png"
            src="https://covers.openlibrary.org/b/id/14853108-M.png"
            alt="App preview"
            className="max-w-4xl w-full rounded-xl shadow-xl mt-16"
          />
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 bg-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="font-semibold text-xl mb-2">Add Books</h3>
            <p className="text-gray-500 text-sm">Quickly add new books to your collection with ease.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <div className="text-4xl mb-4">✏️</div>
            <h3 className="font-semibold text-xl mb-2">Edit Details</h3>
            <p className="text-gray-500 text-sm">Update book info like title, author, and reading status.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <div className="text-4xl mb-4">🗑️</div>
            <h3 className="font-semibold text-xl mb-2">Delete Books</h3>
            <p className="text-gray-500 text-sm">Remove books you no longer want in your collection.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="font-semibold text-xl mb-2">View Collection</h3>
            <p className="text-gray-500 text-sm">See all your books in a beautiful and organized display.</p>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Book Manager. All rights reserved.
      </footer>
    </div>
  );
}
