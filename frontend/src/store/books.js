import { csrfFetch } from './csrf'

export const LOAD_BOOKS = 'BOOKS/LOAD_BOOKS'
const LOAD_BOOK = 'BOOKS/LOAD_BOOK'
const CREATE_BOOK = 'BOOKS/CREATE_BOOK'
const EDIT_BOOK = 'BOOKS/EDIT_BOOK'
const DELETE_BOOK = 'BOOKS/DELETE_BOOK'

export const loadBook = (books) => ({
  type: LOAD_BOOKS,
  books
})

const loadSingleBook = (book) => ({
  type: LOAD_BOOK,
  book
})

const createBook = (book) => ({
  type: CREATE_BOOK,
  book
})

const editBook = (bookId) => ({
  type: EDIT_BOOK,
  bookId
})

const deleteBook = (bookId) => ({
  type: DELETE_BOOK,
  bookId
})

export const fetchAllBooks = () => async (dispatch) => {
  const res = await csrfFetch('/api/books')
  if (res.ok) {
    const data = await res.json()
    dispatch(loadBook(data))
    return data
  }
}

export const fetchBookById = (bookId) => async (dispatch) => {
  const res = await csrfFetch(`/api/books/${bookId}`)
  const data = await res.json()
  if (data.ok) {
    dispatch(loadSingleBook(data))
  }
  return data
}

// export const fetchCreateBookWithImage = (payload) => async (dispatch) => {

//   const { title, author, genre, imageFile, userId } = payload
//   const formData = new FormData()
//   // used for aws
//   formData.append('userId', userId)
//   formData.append('title', title)
//   formData.append('author', author)
//   formData.append('genre', genre)

//   // for single file
//   if (imageFile) formData.append('image', imageFile)

//   const res = await csrfFetch('/api/books/new', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     },
//     body: formData
//   })

//   const data = await res.json()
//   if (data.ok) {
//     dispatch(createBook(data))
//   } else {
//     return data
//   }
// }


// With No Image
export const fetchCreateBook = (title, author, genre, userId) => async (dispatch) => {
    const res = await csrfFetch('/api/books/new', {
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, genre, userId })
    })
  
    const data = await res.json()
    if (res.ok) {
      dispatch(createBook(data))
      return data
    } else {
      return data
    }
  }

  export const fetchEditBookById = (title, author, genre, userId, bookId) => async (dispatch) => {
    const res = await csrfFetch(`/api/books/${bookId}`, {
      method: 'PUT',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, genre, userId })
    })
  
    const data = await res.json()
    if (res.ok) {
      dispatch(editBook(data))
      return data
    } else {
      return data
    }
  }

export const fetchDeleteBookById = (bookId) => async (dispatch) => {
  const res = await csrfFetch(`/api/books/${bookId}`, {
    method: 'DELETE'
  })
  if (res.ok) {
    const data = await res.json()
    dispatch(deleteBook(data))
    await fetchAllBooks()
    return data
  }
}

const initialState = {}
function reducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return { ...action.books }
    case LOAD_BOOK:
      return { ...action.book }
    case CREATE_BOOK:
      state[action.book.id] = action.book
      return state
    case EDIT_BOOK:
      state[action.bookId] = action.book
      return state
    case DELETE_BOOK:
      delete state[action.bookId]
      return state
    default:
      return state
  }
}

export default reducer
