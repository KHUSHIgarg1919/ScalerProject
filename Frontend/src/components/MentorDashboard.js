import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MentorDashboard = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      const response = await axios.get('/api/mentors');
      setMentors(response.data);
    } catch (error) {
      console.error('Error fetching mentors:', error);
    }
  };

  return (
    <div>
      <h2>Mentor Dashboard</h2>
      {mentors.map((mentor) => (
        <div key={mentor._id}>
          <h3>{mentor.name}</h3>
          <ul>
            {mentor.assignedStudents.map((student) => (
              <li key={student._id}>
                {student.name} - Ideation: {student.marks.ideation}, Execution: {student.marks.execution}, Viva/Pitch: {student.marks.vivaPitch}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MentorDashboard;
