import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssignStudentsForm = () => {
  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    fetchMentors();
    fetchStudents();
  }, []);

  const fetchMentors = async () => {
    try {
      const response = await axios.get('/api/mentors');
      setMentors(response.data);
    } catch (error) {
      console.error('Error fetching mentors:', error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get('/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const assignStudents = async () => {
    try {
      await axios.put(`/api/mentors/${selectedMentor}/assign`, { students: selectedStudents });
      alert('Students assigned successfully!');
      setSelectedMentor('');
      setSelectedStudents([]);
    } catch (error) {
      console.error('Error assigning students:', error);
    }
  };

  return (
    <div className="column">
      <h2>Assign Students to Mentor</h2>
      <div className="form-group">
        <label htmlFor="mentor">Select Mentor: </label>
        <select id="mentor" onChange={(e) => setSelectedMentor(e.target.value)} value={selectedMentor}>
          <option value="">Select Mentor</option>
          {mentors.map((mentor) => (
            <option key={mentor._id} value={mentor._id}>
              {mentor.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="students">Select Students: </label>
        <select multiple id="students" onChange={(e) => setSelectedStudents(Array.from(e.target.selectedOptions, option => option.value))} value={selectedStudents}>
          {students.map((student) => (
            <option key={student._id} value={student._id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>
      <button className="btn" onClick={assignStudents}>Assign</button>
    </div>
  );
};

export default AssignStudentsForm;
