export default function LandingPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 text-gray-900 px-6 py-12">
        <header className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Organize Your Reading Life</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Track, manage, and discover books — all in one place.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition">Get Started</button>
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl text-lg font-semibold hover:bg-gray-300 transition">Live Demo</button>
          </div>
        </header>
  
        <section className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2">Add Books</h3>
            <p className="text-gray-500">Quickly add new books to your collection with ease.</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2">Edit Details</h3>
            <p className="text-gray-500">Update book info like title, author, and reading status.</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2">Delete Books</h3>
            <p className="text-gray-500">Remove books you no longer want in your collection.</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2">View Collection</h3>
            <p className="text-gray-500">See all your books in a beautiful and organized display.</p>
          </div>
        </section>
  
        <footer className="mt-24 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Book Manager. All rights reserved.
        </footer>
      </div>
    );
  }