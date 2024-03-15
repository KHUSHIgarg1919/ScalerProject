const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

// GET all mentors
router.get('/mentors', mentorController.getAllMentors);

// PUT assign students to mentor
router.put('/mentors/:id/assign', mentorController.assignStudents);

module.exports = router;
