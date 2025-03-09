import express from "express";
import dotenv from "dotenv";
import { books } from "./books"; // Ensure books is imported correctly
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET, PUT, DELETE",
    credentials: true, 
  })
);


app.get("/api/books", (req, res) => {
  res.json(books);
});


app.get("/api/books/filter", (req, res) => {
  let filteredBooks = [...books]; 

  const { genre, year, pages, sortBy } = req.query;

  if (genre) {
    filteredBooks = filteredBooks.filter((book) => book.genre.toLowerCase() === (genre as string).toLowerCase());
  }

  if (year) {
    const yearInt = parseInt(year as string);
    filteredBooks = filteredBooks.filter((book) => book.year >= yearInt);
  }

  if (pages) {
    const pagesInt = parseInt(pages as string);
    filteredBooks = filteredBooks.filter((book) => book.pages >= pagesInt);
  }

  if (sortBy) {
    if (sortBy === "title") {
      filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "year") {
      filteredBooks.sort((a, b) => a.year - b.year);
    } else if (sortBy === "pages") {
      filteredBooks.sort((a, b) => a.pages - b.pages);
    }
  }

  res.json(filteredBooks);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
