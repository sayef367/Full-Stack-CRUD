const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const employee = require('./router/employee');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Database connecton
mongoose.connect('mongodb://127.0.0.1:27017/asifEmployees')
  .then(() => console.log('Database connecton successfully'))
  .catch(err => console.log(err));

// all api routes
app.use('/', employee);

// run the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
