require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const booksRouter = require('./routes/bookroute');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => res.send('working'));
app.use('/api/books', booksRouter);

connectDb(process.env.MONGO_URI).then(() => {}).catch(() => {});

module.exports = app;
