const Book = require('../models/bookmodels');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.new= async (req, res) => {
  try {
    const books = req.body;
    const inserted = await Book.insertMany(books);
    res.status(201).json(inserted);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { title, author, description, year, genre, coverUrl } = req.body;
    const book = new Book({ title, author, description, year, genre, coverUrl });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updates = req.body;
    const book = await Book.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};