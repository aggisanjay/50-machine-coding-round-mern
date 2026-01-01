
import React, { useState } from 'react'

const StudentForm = () => {

    const [form,setForm]=useState({
        name:'',
        rollNo:'',
        course:'',
        marks:''
    })

    const submit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:5000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (!res.ok) throw new Error("Request failed");

    setForm({ name:'', rollNo:'', course:'', marks:'' });
    window.location.reload();
  } catch (err) {
    console.error(err);
    alert("Backend not reachable");
  }
};


  return (
    <form className='form' onSubmit={submit}>
        <input  placeholder='name' value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input  placeholder='Roll No' value={form.rollNo} onChange={e=>setForm({...form,rollNo:e.target.value})} />
        <input  placeholder='Course' value={form.course} onChange={e=>setForm({...form,course:e.target.value})} />
        <input  placeholder='Marks' value={form.marks} onChange={e=>setForm({...form,marks:e.target.value})} />

        <button>Add Student</button>

      
    </form>
  )
}

export default StudentForm
