require('dotenv').config();
const express = require('express')
const config = require('./Configs/db')
const userRouteIndex = require('./Routes/index')
const app = express()
const port  = process.env.PORT

// This line parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());

app.use("/api/v1",userRouteIndex)

console.log('hi')

app.listen(port,()=>{
    console.log(`running on ${port}`)
})