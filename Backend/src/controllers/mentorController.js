const Mentor = require('../models/Mentor');

// Controller function to get all mentors
exports.getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to assign students to a mentor
exports.assignStudents = async (req, res) => {
  const { students } = req.body;
  const mentorId = req.params.id;
  try {
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }
    // Check if the mentor can accommodate the students
    if (students.length < 3 || students.length > 4) {
      return res.status(400).json({ message: 'A mentor can only accommodate 3 to 4 students' });
    }
    mentor.assignedStudents = students;
    await mentor.save();
    res.status(200).json({ message: 'Students assigned successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
