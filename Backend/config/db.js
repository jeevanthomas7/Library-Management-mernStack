const mongoose = require('mongoose');

const connectDb = async (MONGO_URI) => {
  try {
    await mongoose.connect(MONGO_URI)
  
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
  }
};

module.exports = connectDb;
