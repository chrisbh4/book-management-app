const express = require('express');
const router = express.Router();
const { Book } = require('../../db/models');

// Get all books for a user
router.get('/', async (req, res) => {
//   const books = await Book.findAll({ where: { userId: req.user.id } });
    const books = await Book.findAll()
    res.json(books);
});

// Create a new book
router.post('/', async (req, res) => {
//   const book = await Book.create({ ...req.body, userId: req.user.id });
// TODO: Fix Book.create syntax
console.log(req.body)
  const book = await Book.create({ ...req.body });
  res.status(201).json(book);
});

// Get a single book
router.get('/:id', async (req, res) => {
//   const book = await Book.findOne({ where: { id: req.params.id, userId: req.user.id } });
  const book = await Book.findOne({ where: { id: req.params.id } });
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

// Update a book
router.put('/:id', async (req, res) => {
//   const book = await Book.findOne({ where: { id: req.params.id, userId: req.user.id } });
  const book = await Book.findOne({ where: { id: req.params.id } });
  if (!book) return res.status(404).json({ error: 'Book not found' });
  await book.update(req.body);
  res.json(book);
});

// Delete a book
router.delete('/:id', async (req, res) => {
//   const book = await Book.findOne({ where: { id: req.params.id, userId: req.user.id } });
  const book = await Book.findOne({ where: { id: req.params.id } });
  if (!book) return res.status(404).json({ error: 'Book not found' });
  await book.destroy();
  res.json({ message: 'Book deleted' });
});


module.exports = router;