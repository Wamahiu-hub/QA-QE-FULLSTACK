import { Request,Response,NextFunction } from "express";
import asyncHandler from "../asyncHandler";

import jwt from "jsonwebtoken";
import pool from "@app/config/db.config";
import { UserRequest } from "@app/utils/types/userTypes";


export const protect=  asyncHandler(async(req:UserRequest,res:Response,next:NextFunction)=>{
    let token = req.cookies["access_token"];

    if(!process.env.JWT_SECRET){
        throw new Error("JWT_SECRET is not defined")
    }

    if(!token){
        res.status(401).json({message:"Not authorized .No token provided"});
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as { userId: string; roleId: number };

        const userQuery = await pool.query(`SELECT users.user_id, users.name, users.email, users.role_id, user_role.role_name
        FROM users JOIN user_role ON users.role_id = user_role.role_id
        WHERE user_id = $1`, [decoded.userId]);

        if(userQuery.rows.length === 0){
            res.status(401).json({message:"user not found"});
            return;
        }
        req.user = userQuery.rows[0];

        next();
        
    } catch (error) {
        console.error("Error verifying JWT:", error);
        res.status(401).json({message:"ineteral server error"});

    }
})