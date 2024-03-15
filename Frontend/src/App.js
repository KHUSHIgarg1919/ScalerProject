import React from 'react';
import AddStudentForm from './components/AddStudentForm';
import AddMarksForm from './components/AddMarksForm';
import AssignStudentsForm from './components/AssignStudentsForm';
import MentorDashboard from './components/MentorDashboard';
import StudentList from './components/StudentList';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Evaluation Dashboard App - Mentor View</h1>
      <div className="container">
        <div className="column">
          <AddStudentForm />
          <StudentList />
        </div>
        <div className="column">
          <AddMarksForm />
          <AssignStudentsForm />
        </div>
        <div className="column">
          <MentorDashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
