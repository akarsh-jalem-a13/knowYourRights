const express = require('express')
const app = express()
const port  = process.env.PORT
console.log('hi')
app.listen(port,()=>{
    console.log(`running on ${port}`)
})