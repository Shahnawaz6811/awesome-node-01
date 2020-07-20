var models = require('../models');
var express = require('express');
var router = express.Router();
const upload = require('../config/multer');

router.get('/', function (req, res) {
  console.log('usrs');
  res.send('Hello userss');
});

router.post('/', upload.fields([{ name: 'image' }, { name: 'pic' }]), function (
  req,
  res
) {
  const { body, files } = req;
  console.log('files: ', files);
  console.log('body: ', body);
  res.sendFile(filepath);
});

module.exports = router;
