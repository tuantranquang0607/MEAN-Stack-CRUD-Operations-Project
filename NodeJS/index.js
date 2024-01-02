const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');

var employeeController = require('./controllers/employeeController.js');
var app = express();

app.use(bodyParser.json());
app.use('/employees', employeeController);
app.listen(3000, () => console.log('Server started at port: http://localhost:3000/employees/'));