const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//Routes
const user = require('./user/routes')

app.use(bodyParser.json())
app.use(cors())

app.use('/api/user', user)

module.exports = app;
