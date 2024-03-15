const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// GET all students
router.get('/students', studentController.getAllStudents);

// POST add a new student
router.post('/students', studentController.addStudent);

module.exports = router;
