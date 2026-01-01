import React, { useEffect, useState } from 'react'

const StudentList = () => {

    const [students,setStudents]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/api/students')
        .then(res=>res.json())
        .then(data=>setStudents(data))
    },[]);
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Course</th>
                <th>Marks</th>
            </tr>
        </thead>
        <tbody>
            {students.map(s=>(
                <tr key={s._id}>
                    <td>{s.name}</td>
                    <td>{s.rollNo}</td>
                    <td>{s.course}</td>
                    <td>{s.marks}</td>


                </tr>
            ))}
        </tbody>
      
    </table>
  )
}

export default StudentList
