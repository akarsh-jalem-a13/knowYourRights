const express = require('express')
const userQuery = require('../Query/user')
const userController = require('../Controller/user')
const userModel = require('../Model/usermodel')
const app = express()

app.post('/saveUser',userQuery,userController)

module.exports = app