import express from 'express';
import colors from 'colors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Hi</h1>")
})

const PORT = process.env.PORT

app.listen(PORT, () =>{
    console.log(`Server running on ${PORT} in ${process.env.MOD}`.bgMagenta.white)
})