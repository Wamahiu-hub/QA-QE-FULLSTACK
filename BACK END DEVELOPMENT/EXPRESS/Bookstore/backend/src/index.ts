import express, { Request, Response } from "express";
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

app.get("/api/books/filter", (req: Request, res: Response) => {
  try {
    const { title, genre, year } = req.query;

    let filteredBooks = books;

    // Convert query parameters to lowercase for case-insensitive filtering
    const titleQuery = title ? (title as string).trim().toLowerCase() : "";
    const genreQuery = genre ? (genre as string).trim().toLowerCase() : "";
    const yearQuery = year ? (year as string).trim() : "";

    if (titleQuery) {
      filteredBooks = filteredBooks.filter((book) =>
        book.title.toLowerCase().includes(titleQuery)
      );
    }

    if (genreQuery) {
      filteredBooks = filteredBooks.filter((book) =>
        book.genre.toLowerCase().includes(genreQuery)
      );
    }

    if (yearQuery) {
      filteredBooks = filteredBooks.filter((book) =>
        book.year.toString().startsWith(yearQuery) // Use `.startsWith()` for partial match
      );
    }

    res.json(filteredBooks);
  } catch (error) {
    console.error("Error filtering books:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});




// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
