/*import pool from './db/db'
import express, { Request, Response } from 'express'


import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.listen(port, () => {    
    console.log(`running on ${port}`)
})*/

import express, { response } from "express";
import dotenv from "dotenv";
import pool from "./db/db";
import bcrypt from "bcryptjs";

dotenv.config();
console.log("ENV PORT:", process.env.PORT);

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello express");
});
app.listen(port, () => {
  console.log(port);
});

app.post("/books", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const emailCheck = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (emailCheck.rows.length > 0) {
      res.status(401).json("User already exists");
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );
    res.status(200).json({message:"User successfuly registred",user:newUser.rows[0]});
  } catch (error) {console.log(error)
    res.status(500).json("Server error");
  }

});
app.post("/booksget", async (req, res) => {
    try {
        const { user_id, title, description, author, pages, genre, publisher, year, price, image } = req.body;

        // Check if user exists
        const userCheck = await pool.query("SELECT * FROM users WHERE id = $1", [user_id]);
        if (userCheck.rows.length === 0) {
        res.status(401).json({ error: "User not found" });
        return
        }

        // Insert book details into database
        const eventDetails = await pool.query(
            "INSERT INTO books (user_id, title, description, author, pages, genre, publisher, year, price, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *", 
            [user_id, title, description, author, pages, genre, publisher, year, price, image]
        );

        res.status(200).json(eventDetails.rows[0]);
    } catch (error) {
        console.error("Error inserting book:", error);  // Log the error
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/booksget", async (req, res) => {
    try {
        const { user_id, title, description, author, pages, genre, publisher, year, price, image } = req.body;

        // Check if user exists
        const userCheck = await pool.query("SELECT * FROM users WHERE id = $1", [user_id]);
      
        if (userCheck.rows.length === 0) {
        res.status(401).json({ error: "User not found" });
        return
        }

        // Insert book details into database
        const eventDetails = await pool.query(
            "INSERT INTO books (user_id, title, description, author, pages, genre, publisher, year, price, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *", 
            [user_id, title, description, author, pages, genre, publisher, year, price, image]
        );

        res.status(200).json(eventDetails.rows[0]);
    } catch (error) {
        console.error("Error inserting book:", error);  // Log the error
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.post("/booksget", async (req, res) => {
  try {
      const { user_id, title, description, author, pages, genre, publisher, year, price, image } = req.body;

      // Check if user exists
      const userCheck = await pool.query("SELECT * FROM users WHERE id = $1", [user_id]);
      if (userCheck.rows.length === 0) {
      res.status(401).json({ error: "User not found" });
      return
      }

      // Insert book details into database
      const eventDetails = await pool.query(
          "INSERT INTO books (user_id, title, description, author, pages, genre, publisher, year, price, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *", 
          [user_id, title, description, author, pages, genre, publisher, year, price, image]
      );

      res.status(200).json(eventDetails.rows[0]);
  } catch (error) {
      console.error("Error inserting book:", error);  // Log the error
      res.status(500).json({ error: "Internal Server Error" });
  }
});

//deleting a book

app.delete("/books/:id", async (req, res) => {
  try {
      const { id } = req.params;

      // Check if the book exists
      const bookCheck = await pool.query("SELECT * FROM books WHERE id = $1", [id]);

      if (bookCheck.rows.length === 0) {
      res.status(404).json({ error: "Book not found" });
      return
      }

      // Delete the book
      await pool.query("DELETE FROM books WHERE id = $1", [id]);

      res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
      console.error("Error deleting book:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});

