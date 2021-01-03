require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.PORT || 8000

//Routes
const user = require('./user/routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.use('/api/user', user)

// Fire server on our port
// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })

module.exports = app;
