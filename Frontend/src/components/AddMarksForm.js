import React, { useState } from 'react';
import axios from 'axios';

const AddMarksForm = ({ studentId, onClose }) => {
  const [ideation, setIdeation] = useState(0);
  const [execution, setExecution] = useState(0);
  const [vivaPitch, setVivaPitch] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/students/${studentId}`, {
        ideation,
        execution,
        vivaPitch
      });
      onClose();
    } catch (error) {
      console.error('Error adding marks:', error);
    }
  };

  return (
    <div>
      <h2>Add Marks</h2>
      <form onSubmit={handleSubmit}>
        <label>Ideation:  </label>
        <input
          type="number"
          value={ideation}
          onChange={(e) => setIdeation(parseInt(e.target.value))}
        /><br/><br/>
        <label>Execution: </label>
        <input
          type="number"
          value={execution}
          onChange={(e) => setExecution(parseInt(e.target.value))}
        /><br/><br/>
        <label>Viva/Pitch: </label>
        <input
          type="number"
          value={vivaPitch}
          onChange={(e) => setVivaPitch(parseInt(e.target.value))}
        /><br/><br/>
        <button type="submit">Submit</button><br/><br/>
      </form>
    </div>
  );
};

export default AddMarksForm;
