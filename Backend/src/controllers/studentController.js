const Student = require('../models/Student');

// Controller function to get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to add a new student
exports.addStudent = async (req, res) => {
  const { name } = req.body;
  try {
    const student = new Student({ name });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
