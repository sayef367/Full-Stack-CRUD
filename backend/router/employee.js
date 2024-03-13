const express = require("express");
const mongoose = require('mongoose');
const employeeSchema = require("../schemas/todoSchema");

const employee = express.Router();
const EmpData = new mongoose.model("Employee", employeeSchema);

// Add employee data
employee.post('/', async (req, res) => {
  const newEmp = new EmpData(req.body);
  await newEmp.save().then(() => {
    res.status(201).json({message: 'Employee data successfully save.'});
  }).catch((err) => {
    res.status(500).json({error: 'Internal server error!'});
  });
  console.log(newEmp);
});

// Get all employee data
employee.get('/', async (req, res) => {
  await EmpData.find().then((data) => {
    res.status(200).json({result: data, message: 'Successfully data delete.'});
  }).catch((err) => {
    res.status(500).json({error: 'Internal server error!'});
  });
});

// Update employee data
employee.put('/', async (req, res) => {
  const data = req.body;
  console.log(data)
  if (data.method === 'status') {
    await EmpData.updateOne(
      {_id: data.id},
      {$set: {
        status: data.status
      }}).then(() => {
      res.status(200).json({message: 'Status Successfully update'});
    }).catch((err) => {
      res.status(500).json({error: 'Internal server error!'});
    });
  } else {
    await EmpData.updateOne(
      {_id: data.id},
      {$set: {
        name: data.name,
        phone: data.phone
      }}).then(() => {
      res.status(200).json({message: 'Status Successfully update'});
    }).catch((err) => {
      res.status(500).json({error: 'Internal server error!'});
    });
  };
});

// Delete employee data
employee.delete('/:id', async (req, res) => {
  console.log(req.params.id);
  await EmpData.deleteOne({_id: req.params.id}).then((data) => {
    res.status(200).json({result: data, message: 'Success'});
  }).catch((err) => {
    res.status(500).json({error: 'Internal server error!'});
  });
});


module.exports = employee;