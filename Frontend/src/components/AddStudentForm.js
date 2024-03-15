import React, { useState } from 'react';
import axios from 'axios';
import './../styles.css';

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/students', { name });
      onAddStudent(response.data);
      setName('');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="column">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
          />
        </div>
        <button className="btn" type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
