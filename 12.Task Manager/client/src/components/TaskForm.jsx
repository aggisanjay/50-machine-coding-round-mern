import React, { useState } from 'react'

import '../index.css'
const TaskForm = ({fetchTasks}) => {

    const [formData,setFormData]=useState({
        title:'',
        description:'',
        status:'pending',
        priority:'medium'
    });


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            await fetch('http://localhost:5000/api/tasks',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(formData)
            })
            fetchTasks();
            setFormData({title:'',description:'',status:'pending',priority:'medium'});
        } catch (err) {
            alert('Error adding task');
            
        }
    }

  return (
    <form onSubmit={handleSubmit} className='task-form'>
        <input placeholder='Task Title' value={formData.title} onChange={e=>setFormData({...formData,title:e.target.value})}  required/>
        <textarea placeholder='Description' value={formData.description} onChange={e=>setFormData({...formData,description:e.target.value})} required />
        <select value={formData.status}  onChange={e=>setFormData({...formData,status:e.target.value})} >
            <option value='pending'>Pending</option>
            <option value='in-progress'>In Progress</option>
            <option value='completed'>Completed</option>

        </select>
        <select value={formData.priority} onChange={e=>setFormData({...formData,priority:e.target.value})}>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>

        </select>
        <button type='submit'>Add Task</button>
               
    </form>
  )
}

export default TaskForm
