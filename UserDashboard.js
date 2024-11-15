import React, { useState, useEffect } from 'react';

const UserDashboard = () => {
  const [task, setTask] = useState({
    description: '',
    priority: '',
    dueDate: ''
  });
  const [message, setMessage] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage when the component mounts
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTasks = [...tasks, task];
    localStorage.setItem('tasks', JSON.stringify(newTasks)); // Save to localStorage
    setTasks(newTasks);
    setMessage('Task submitted successfully!');
    setTask({ description: '', priority: '', dueDate: '' }); // Reset the form
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input type="text" name="description" value={task.description} onChange={handleChange} required />
        </label>
        <label>
          Priority:
          <input type="text" name="priority" value={task.priority} onChange={handleChange} required />
        </label>
        <label>
          Due Date:
          <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
        </label>
        <button type="submit">Submit Task</button>
      </form>
      {message && <p>{message}</p>} {/* Display submission message */}

      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.description} - {task.priority} - {task.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;