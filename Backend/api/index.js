// api/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('../config/db'); // adjust path if config is elsewhere
const booksRouter = require('../routes/bookroute');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ ok: true, message: 'Backend alive' }));

// Mount routes under /api/books
app.use('/api/books', booksRouter);

// Connect DB (connection caching handled in config/db)
connectDb(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected (serverless)'))
  .catch(err => console.error('MongoDB connection error (serverless):', err.message));

module.exports = app;
