const express = require('express');

var router = express.Router();
var { Employee } = require('../models/employee.js');

// router.get('/', (req, res) => {
//     Employee.find((err, docs) => {
//         if (!err) {
//             res.send(docs);
//         } else {
//             console.log('Error occurred in Retriving Employees: ' + JSON.stringify(err, undefined, 2));
//         }
//     });
// });
router.get('/', async (req, res) => {
    try {
        const docs = await Employee.find();
        res.send(docs);
    } catch (err) {
        console.log('Error occurred in Retrieving Employees: ' + JSON.stringify(err, undefined, 2));
    }
});

// router.post('/', (req, res) => {
//     var emp = new Employee({
//         name: req.body.name,
//         position: req.body.position,
//         office: req.body.office,
//         salary: req.body.salary
//     });
//     emp.save((err, doc) => {
//         if (!err) {
//             res.send(doc);
//         } else {
//             console.log('Error occurred in Employee Save: ' + JSON.stringify(err, undefined, 2));
//         }
//     });
// });
router.post('/', async (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    try {
        const doc = await emp.save();
        res.send(doc);
    } catch (err) {
        console.log('Error occurred in Employee Save: ' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = router;



