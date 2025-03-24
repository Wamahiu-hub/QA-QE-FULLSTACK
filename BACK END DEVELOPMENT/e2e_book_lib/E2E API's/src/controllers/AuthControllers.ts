import { Request, Response, NextFunction } from "express";
import pool from "../config/db.config";
import bcrypt from "bcryptjs";
import asyncHandler from "../middlewares/asyncHandler";
import { generateToken } from "@app/utils/helpers/generateToken";
import { de } from "@faker-js/faker/.";
import { UserRequest } from "@app/utils/types/userTypes";

export const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password_hash, role_id } = req.body;

    // Check if user exists
    const userExists = await pool.query(
      "SELECT user_id FROM users WHERE email = $1",
      [email]
    );

    if (userExists.rows.length > 0) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    //before inserting into users, we need to hash the passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password_hash, salt);

    //insert into user table
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password_hash, role_id) VALUES ($1, $2, $3, $4) RETURNING user_id, name, email, role_id",
      [name, email, hashedPassword, role_id]
    );

    generateToken(res, newUser.rows[0].user_id, newUser.rows[0].role_id);

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser.rows[0] });

    next;
  }
);



export const loginUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body; // Use 'password' instead of 'password_hash'

    // Check if user exists
    const userCheck = await pool.query(
      `SELECT users.user_id, users.name, users.email, users.password_hash, users.role_id, user_role.role_name
       FROM users 
       JOIN user_role ON users.role_id = user_role.role_id 
       WHERE email = $1`,
      [email]
    );

    if (userCheck.rows.length === 0) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    const user = userCheck.rows[0];

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password_hash); // Compare 'password' with 'password_hash'

    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    // Generate token and set it in cookies
    generateToken(res, user.user_id, user.role_id);

    // Send user details
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        user_id: user.user_id,
        name: user.name,
        email: user.email,
        role_id: user.role_id,
        role_name: user.role_name,
      },
    });
  }
);

// logout
export const logoutUser = asyncHandler(
  async (req: UserRequest, res: Response, next: NextFunction) => {
    res.cookie("access_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      expires: new Date(0),
    });

    res.cookie("refresh_token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        expires: new Date(0),
    })
    res.status(200).json({ message: "User logged out successfully" });
  }
);
