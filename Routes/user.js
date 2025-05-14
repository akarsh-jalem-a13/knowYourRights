const express = require('express')
const userQuery = require('../Queries/user')
const userController = require('../Controllers/user')
const userModel = require('../Models/usermodel')
const app = express()

app.post('/saveUser',userQuery.insertUserDetails,userController.userSave)

module.exports = app