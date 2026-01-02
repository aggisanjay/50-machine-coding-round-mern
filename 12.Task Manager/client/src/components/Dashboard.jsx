import React, { useEffect, useState } from 'react'
import TaskForm from './TaskForm'
import TaskTable from './TaskTable'
import '../index.css'

const Dashboard = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  const fetchTasks = async () => {
    try {
      setLoading(true)
      const res = await fetch('http://localhost:5000/api/tasks')
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setTasks(data)
    } catch (err) {
      alert('Backend not reachable')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const filteredTasks =
    filter === 'all'
      ? tasks
      : tasks.filter(task => task.status === filter)

  return (
    <div className="app-container">
      <header className="dashboard-header">
        <h1>Task Manager</h1>

        <div className="header-actions">
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <button
            className="btn-logout"
            onClick={() => {
              localStorage.removeItem('token')
              window.location.reload()
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {loading ? (
        <div className="loading">Loading tasks…</div>
      ) : (
        <>
          <TaskForm fetchTasks={fetchTasks} />
          <TaskTable tasks={filteredTasks} fetchTasks={fetchTasks} />
        </>
      )}
    </div>
  )
}

export default Dashboard
