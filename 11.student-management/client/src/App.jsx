
import React from 'react'
import './index.css'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
const App = () => {

  return (
    <div className='app'>
      <h2>Student Management System</h2>
      <StudentForm />
      <StudentList/>
      
    </div>
  )
}

export default App
