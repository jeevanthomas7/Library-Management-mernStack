require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const booksRouter = require('./routes/bookroute');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('working')
})

app.use('/api/books', booksRouter);

connectDb(process.env.MONGO_URI);

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
