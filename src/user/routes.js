const express = require('express');
const app = require('../index')
const UserService = require('./service')
const BasicFront = require('../lib/BasicFront')

const router = express.Router();

let UserFront = new BasicFront(UserService);

router
  .post('/create/', UserFront.create())
  .get('/get/:id', UserFront.get())
  .get('/search/', UserFront.search())
  .patch('/update/:id', UserFront.update())
  .delete('/remove/:id', UserFront.remove())


module.exports = router;
