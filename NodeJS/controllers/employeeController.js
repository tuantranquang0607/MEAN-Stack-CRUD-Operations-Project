const express = require('express');

var router = express.Router();
var { Employee } = require('../models/employee.js');
var ObjectId = require('mongoose').Types.ObjectId;

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

// router.get('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id)) {
//         return res.status(400).send(`No record with given id: ${req.params.id}`);
//     }

//     Employee.findById(req.params.id, (err, doc) => {
//         if (!err) {
//             res.send(doc);
//         } else {
//             console.log('Error occurred in Retrieving Employee: ' + JSON.stringify(err, undefined, 2));
//         }
//     });
// });
router.get('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }

    try {
        const doc = await Employee.findById(req.params.id);
        res.send(doc);
    } catch (err) {
        console.log('Error occurred in Retrieving Employee: ' + JSON.stringify(err, undefined, 2));
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

// router.put('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id)) {
//         return res.status(400).send(`No record with given id: ${req.params.id}`);
//     }

//     var emp = {
//         name: req.body.name,
//         position: req.body.position,
//         office: req.body.office,
//         salary: req.body.salary
//     };

//     Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
//         if (!err) {
//             res.send(doc);
//         } else {
//             console.log('Error occurred in Employee Update: ' + JSON.stringify(err, undefined, 2));
//         }
//     });
// });
router.put('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };

    try {
        const doc = await Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true });
        res.send(doc);
    } catch (err) {
        console.log('Error occurred in Employee Update: ' + JSON.stringify(err, undefined, 2));
    }
});

// router.delete('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id)) {
//         return res.status(400).send(`No record with given id: ${req.params.id}`);
//     }

//     Employee.findByIdAndRemove(req.params.id, (err, doc) => {
//         if (!err) {
//             res.send(doc);
//         } else {
//             console.log('Error occurred in Employee Delete: ' + JSON.stringify(err, undefined, 2));
//         }
//     });
// });
router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }

    try {
        const doc = await Employee.findByIdAndRemove(req.params.id);
        res.send(doc);
    } catch (err) {
        console.log('Error occurred in Employee Delete: ' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = router;



