const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample Data
let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "1984", author: "George Orwell" }
];

// GET Route (Retrieve Data)
app.get("/books", (req, res) => {
  res.json(books);
});

// POST Route (Add New Data)
app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

