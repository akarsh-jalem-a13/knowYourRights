const express = require('express')
const loginQuery = require('../Queries/login')
const loginController = require('../Controllers/login')
const userModel = require('../Models/usermodel')
const app = express()

app.post('/send-otp',loginQuery,loginController)

module.exports = app