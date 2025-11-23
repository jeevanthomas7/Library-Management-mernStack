const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  year: { type: Number },
  genre: { type: String },
  coverUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);
