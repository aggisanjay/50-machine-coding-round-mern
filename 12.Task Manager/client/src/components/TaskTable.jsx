

import React from 'react'
import '../index.css'
const TaskTable = ({tasks,fetchTasks}) => {

    const updateTask=async(id,updates)=>{
        try {
            await fetch(`http://localhost:5000/api/tasks/${id}`,{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(updates)
            });
            fetchTasks();
        } catch (error) {
            console.log(error);
        }
    }


    const deleteTask=async(id)=>{
        if (window.confirm('Delete this task?')) {
      try {
        await fetch(`http://localhost:5000/api/tasks/${id}`, { method: 'DELETE' });
        fetchTasks();
      } catch (err) {
        console.error(err);
      }
    }
    }

  return (
    <div className='task-table-container'>
        <h2>Tasks ({tasks.length})</h2>
        <div className='table-wrapper'>
         <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Created</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task=>(
                    <tr key={task._id}>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>
                            <select value={task.status} onChange={e=>updateTask(task._id,{status:e.target.value})}>
                                <option value='pending'>Pending</option>
                                <option value='in-progress'>In Progress</option>
                                <option value='completed'>Completed</option>

                            </select>
                        </td>
                        <td>
                        <span className={`priority-badge priority-${task.priority}`}>
                            {task.priority.toUpperCase()}

                        </span>

                   </td>

                   <td>
                    {new Date(task.createdAt).toLocaleDateString()}
                   </td>
                   <td>
                    <button className='btn-delete' onClick={()=>deleteTask(task._id)}>
                        Delete

                    </button>
                   </td>

                    </tr>
                ))}
            </tbody>
         </table>
        </div>
      
    </div>
  )
}

export default TaskTable
