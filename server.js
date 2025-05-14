require('dotenv').config();
const express = require('express')
const config = require('./Config/db')
const userRouteIndex = require('./Route/index')
const app = express()
const port  = process.env.PORT

app.use("/api/v1",userRouteIndex)

console.log('hi')

app.listen(port,()=>{
    console.log(`running on ${port}`)
})