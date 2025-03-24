import asyncHandler from "@app/middlewares/asyncHandler";
import { NextFunction, Response,Request } from "express";
import { UserRequest } from "@app/utils/types/userTypes";
import pool from "@app/config/db.config";


export const addBook = asyncHandler(
    async (req: UserRequest, res: Response, next: NextFunction) => {

        if (!req.user) {
            res.status(401).json({ message: "access denied 😟" });
            return;
        }
        const userId = req.user.user_id;

        // destructure the request body
        const { title, author, genre, year, pages, publisher, description, available_copies, image } = req.body;

        // only admins and libaraian can add a books
        if (req.user.role_name !== "Admin" && req.user.role_name !== "Librarian") {
            res.status(403).json({ message: "Get out !! You don't belong here" });
            return;
        }

        // check if book already exists
        const bookExists = await pool.query("SELECT * FROM books WHERE title = $1", [title]);

        if (bookExists.rows.length > 0) {
            res.status(400).json({ message: "Book already exists" });
            return;
        }

        // add book to the database
        const newBook = await pool.query(
            "INSERT INTO books (title, author, genre, year, pages, publisher, description, available_copies, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [title, author, genre, year, pages, publisher, description, available_copies, image]
        );

        res.status(201).json({ message: "Book added successfully", book: newBook.rows[0] });

    }
)

export const getBooks = asyncHandler(
    async(req:Request,res:Response)=>{
        const books = await pool.query("SELECT * FROM books");
        res.status(200).json(books.rows);
    }
)