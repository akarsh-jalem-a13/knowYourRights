const express = require('express');
const app = express();
const userRoutes = require('./user')
const loginRoutes = require('./login')

app.use('/user/profile',userRoutes)
app.use('auth/login',loginRoutes)

module.exports = app;