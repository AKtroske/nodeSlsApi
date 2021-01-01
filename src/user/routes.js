const express = require('express');
const app = require('../index')
const UserService = require('./service')

const router = express.Router();

router
  .post('/post/', UserService.create())
  .get('/get/', UserService.get())
  .get('/search/', UserService.search())
  .patch('/update/', UserService.update())
  .delete('/remove/', UserService.remove())

module.exports = router;
