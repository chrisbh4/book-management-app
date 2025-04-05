import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllBooks, fetchCreateBook, fetchEditBookById, fetchDeleteBookById } from './store/books';

function App() {

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchAllBooks());
}, [dispatch]);




const books = useSelector((state) => state?.books) || [];
const booksArray = Object.values(books);

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
    <div className="App">
      <button onClick={() => handleCreate('New Book', 'Author', 'Genre', 1)}>
          Add Book
        </button>
        <button onClick={() => dispatch(fetchEditBookById('Updated Book', 'Updated Author', 'Updated Genre', 1, 5))}>
          Edit Book
        </button>
        <button onClick={() => dispatch(fetchDeleteBookById(1))}>
          Delete Book
        </button>
      <main>
        <h1>Book List</h1>
        <ul>
          {booksArray.map((book) => (
            <li key={book?.id}>
              {book?.title} by {book?.author} - {book?.genre}
              <button onClick={() => handleDelete(book?.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p>Book Management App</p>
      </footer>
    </div>
  );
}

export default App;
