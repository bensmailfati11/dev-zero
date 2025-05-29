// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

async function MongoConnection() {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("URI:", process.env.MONGO_URI);

    if (connect) {
      console.log("✅ DB connected successfully");
      return connect;
    }
  } catch (error) {
    console.error("❌ DB connection failed:", error.message);
    throw error;
  }
};

module.exports = MongoConnection;