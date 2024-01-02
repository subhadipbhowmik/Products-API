const mongoose = require("mongoose");

const connectDB = async (uri) => {
  console.log("Connecting to database...");
  return await mongoose.connect(uri);
};

module.exports = connectDB;
