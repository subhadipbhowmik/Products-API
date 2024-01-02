// connect with database
require("dotenv").config();
const express = require("express");
const app = express();
const products_router = require("./routes/products");
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// middleware or routes
app.use("/api/products", products_router);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
