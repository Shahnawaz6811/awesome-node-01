var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  console.log('usrs');
  res.send('Hello userss');
});

module.exports = router;
