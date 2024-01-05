const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');
const cors = require('cors');

var employeeController = require('./controllers/employeeController.js');
var app = express();

app.use(bodyParser.json());
app.use('/employees', employeeController);
app.listen(3000, () => console.log('Server started at port: http://localhost:3000/employees/'));
app.use(cors({ origin: 'http://localhost:4200' }));