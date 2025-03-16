import express,{Request, Response} from 'express'
import pool from './db/db'
import dotenv from 'dotenv'


dotenv.config()

const app = express()

const port = process.env.PORT

app.use(express.json())

app.get('/users', async(req:Request, res:Response) => {
  try {
    const {title} = req.body
    const myBooks = await pool.query("SELECT * FROM  books")
    let filteredBooks = [...myBooks.rows]

    if(title) {
      filteredBooks = filteredBooks.filter((book) => book.title.toLowercase().includes((title as string).toLowerCase))
    }
    res.send(filteredBooks)
  } catch (error) {
    res.status(500).json({message: "error"})
  }
})

app.listen(port, () => {
  console.log(`running on ${port}`)
})