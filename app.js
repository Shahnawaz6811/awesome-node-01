const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');
// read environment vars
require('dotenv').config();
const app = express();

var users = require('./routes/users');

app.use(logger('dev'));

// serve static files from public dir
app.use(express.static(path.join(__dirname, 'public')));

// parses post form input and populate into req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// enable cors
app.use(cors());

// routes
app.use('/users', users);



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}`);
});
