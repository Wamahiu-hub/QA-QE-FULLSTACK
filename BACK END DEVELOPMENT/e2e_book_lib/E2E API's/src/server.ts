//configure dotenv here
//express instance
//load variables
//enable all important middlewares
//create all routes
//load nore middlewares- eg error handlers
//start the server
import { setupAliases } from "import-aliases";
setupAliases();

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";       
import authRoutes from "./routes/authRoutes";
import bookRoutes from "./routes/bookRoutes";


//1. now config dotenv
dotenv.config();
//2. create express instance
const app = express();

//3. NEVER FORGET EXPRESS.JSON OR COOKIE PARSER.
app.use(express.json());//for parsing application/json
app.use(express.urlencoded({ extended: true }));//for parsing application/x-www-form-urlencoded 
app.use(cookieParser());//for parsing cookies 

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, PUT, POST, DELETE",
    credentials: true
}))

//4. routes
app.use("/api/auth", authRoutes);

app.use('/api/books', bookRoutes);

//5. middlewares for error handling

//6. start the server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT - ${PORT}`)
})
//3. load variables

 