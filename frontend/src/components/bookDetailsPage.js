const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
      description:
        "An insightful guide to building good habits and breaking bad ones with actionable strategies.",
      progress: 85,
      notes: [
        "You do not rise to the level of your goals. You fall to the level of your systems.",
        "Every action you take is a vote for the type of person you wish to become."
      ]
    }
  ];
  
  export default function BookDetail() {
    const book = books[0];
  
    return (
    //   <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-gray-900 px-4 sm:px-6 md:px-12 py-12 sm:py-16">
      <div className="min-h-screen bg-gradient-to-br bg-gray-500 text-gray-900 px-4 sm:px-6 md:px-12 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="flex justify-center md:justify-end">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full max-w-[300px] sm:max-w-xs md:max-w-sm rounded-3xl shadow-2xl border border-gray-200"
            />
          </div>
  
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-2">{book.title}</h1>
              <p className="text-base sm:text-lg text-gray-500 font-medium">by {book.author}</p>
            </div>
  
            <p className="text-base text-gray-700 leading-relaxed">{book.description}</p>
  
            <div>
              <p className="text-sm text-gray-500 mb-1 font-medium">Reading Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${book.progress}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1 font-medium">{book.progress}% completed</p>
            </div>
  
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">📝 Notes & Highlights</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {book.notes.map((note, idx) => (
                  <li key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="px-6 py-2 w-full sm:w-auto bg-yellow-500 text-white font-semibold rounded-xl shadow hover:bg-yellow-600 transition">
                Edit Book
              </button>
              <button className="px-6 py-2 w-full sm:w-auto bg-red-500 text-white font-semibold rounded-xl shadow hover:bg-red-600 transition">
                Delete Book
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  