"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const books_1 = require("./books"); // Ensure books is imported correctly
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Enable CORS
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    methods: "GET, PUT, DELETE",
    credentials: true,
}));
app.get("/api/books", (req, res) => {
    res.json(books_1.books);
});
app.get("/api/books/filter", (req, res) => {
    try {
        const { title, genre, year } = req.query;
        let filteredBooks = books_1.books;
        // Convert query parameters to lowercase for case-insensitive filtering
        const titleQuery = title ? title.trim().toLowerCase() : "";
        const genreQuery = genre ? genre.trim().toLowerCase() : "";
        const yearQuery = year ? year.trim() : "";
        if (titleQuery) {
            filteredBooks = filteredBooks.filter((book) => book.title.toLowerCase().includes(titleQuery));
        }
        if (genreQuery) {
            filteredBooks = filteredBooks.filter((book) => book.genre.toLowerCase().includes(genreQuery));
        }
        if (yearQuery) {
            filteredBooks = filteredBooks.filter((book) => book.year.toString().startsWith(yearQuery) // Use `.startsWith()` for partial match
            );
        }
        res.json(filteredBooks);
    }
    catch (error) {
        console.error("Error filtering books:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
