const express = require('express')
const app = require('../index')
const BuildUserFront = require('./UserFront')

const router = express.Router()

const UserFront = BuildUserFront()

router
  .post('/create/', UserFront.create())
  .get('/get/:id', UserFront.get())
  .get('/search/', UserFront.search())
  .patch('/update/:id', UserFront.update())
  .delete('/remove/:id', UserFront.remove())


module.exports = router;
