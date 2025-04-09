import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllBooks, fetchCreateBook, fetchEditBookById, fetchDeleteBookById } from '../store/books';
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

function Dashboard() {

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchAllBooks());
}, [dispatch]);


const data = [
  { name: "Non-Fiction", value: 9 },
  { name: "Fiction", value: 5 },
];

const COLORS = ["#3366FF", "#FFA500"];

const books = [
  {
    title: "The Way We Eat Now",
    author: "Bee Wilson",
    image: "https://covers.openlibrary.org/b/id/9781787-L.jpg",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    image: "https://covers.openlibrary.org/b/id/10770893-L.jpg",
  },
  {
    title: "Educated",
    author: "Tara Westover",
    image: "https://covers.openlibrary.org/b/id/9256601-L.jpg",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    image: "https://covers.openlibrary.org/b/id/8169616-L.jpg",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    image: "https://covers.openlibrary.org/b/id/8169616-L.jpg",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    image: "https://covers.openlibrary.org/b/id/8169616-L.jpg",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    image: "https://covers.openlibrary.org/b/id/8169616-L.jpg",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    image: "https://covers.openlibrary.org/b/id/8169616-L.jpg",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    image: "https://covers.openlibrary.org/b/id/14853108-M.jpg",
    
  },
];


// const books = useSelector((state) => state?.books) || [];
// const booksArray = Object.values(books);

const handleDelete = async (bookId) => {
  await dispatch(fetchDeleteBookById(bookId));
  dispatch(fetchAllBooks());
  // Ensure the Redux state is updated correctly in the fetchDeleteBookById action
  // Optionally, handle any additional logic after deleting the book
  console.log('Book deleted successfully');
  return "Book deleted successfully";
};

const handleCreate = async (title, author, genre, id) => {
  await dispatch(fetchCreateBook(title, author, genre, id));
  dispatch(fetchAllBooks());
  // Optionally, handle any additional logic after creating the book
  console.log('Book created successfully');
  return "Book created successfully";
};


  return (
    // <div className="App">
    //   <button onClick={() => handleCreate('New Book', 'Author', 'Genre', 1)}>
    //       Add Book
    //     </button>
    //     <button onClick={() => dispatch(fetchEditBookById('Updated Book', 'Updated Author', 'Updated Genre', 1, 5))}>
    //       Edit Book
    //     </button>
    //     <button onClick={() => dispatch(fetchDeleteBookById(1))}>
    //       Delete Book
    //     </button>
    //   <main>
    //     <h1>Book List</h1>
    //     <ul>
    //       {booksArray.map((book) => (
    //         <li key={book?.id}>
    //           {book?.title} by {book?.author} - {book?.genre}
    //           <button onClick={() => handleDelete(book?.id)}>
    //             Delete
    //           </button>
    //         </li>
    //       ))}
    //     </ul>
    //   </main>
    //   <footer>
    //     <p>Book Management App</p>
    //   </footer>
    // </div>
    <div className="App flex justify-center items-center min-h-screen bg-gray-100 px-4">
  <div className="w-full max-w-6xl p-4 sm:p-6 bg-white rounded-xl shadow-md">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="space-x-2">
        <button className="border border-gray-300 px-3 py-1 rounded-md text-sm">Status</button>
        <button className="border border-gray-300 px-3 py-1 rounded-md text-sm">Author</button>
        <button className="border border-gray-300 px-3 py-1 rounded-md text-sm">Date</button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="space-y-2">
        <p className="text-lg font-medium">Statistics</p>
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 text-center">
          <div>
            <p className="text-xl font-bold">5</p>
            <p className="text-sm text-gray-600">Books Read</p>
          </div>
          <div>
            <p className="text-xl font-bold">2</p>
            <p className="text-sm text-gray-600">Currently Reading</p>
          </div>
          <div>
            <p className="text-xl font-bold">14</p>
            <p className="text-sm text-gray-600">Total Books</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-lg font-medium">Books by Genre</p>
        <div className="flex justify-center">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book, index) => (
        <div
          key={index}
          className="p-2 rounded-2xl shadow-md bg-white border border-gray-200"
        >
          <img
            src={book.image}
            alt={book.title}
            className="rounded mb-2 h-48 w-full object-cover"
          />
          <div className="p-0">
            <p className="font-medium text-sm">{book.title}</p>
            <p className="text-sm text-gray-500">{book.author}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}

export default Dashboard;
