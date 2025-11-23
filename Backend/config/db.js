const mongoose = require('mongoose');

const connectDb = async (MONGO_URI) => {
  if (!MONGO_URI) throw new Error('MONGO_URI is required');
  if (mongoose.connection.readyState === 1) return mongoose.connection;
  const conn = await mongoose.connect(MONGO_URI);
  return conn;
};

module.exports = connectDb;
