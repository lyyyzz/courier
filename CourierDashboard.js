import React, { useEffect, useState } from 'react';

const CourierDashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage when the component mounts
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const updateTaskStatus = (index, status) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], status }; // Update the task status
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save to localStorage
    setTasks(updatedTasks); // Update state
  };

  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={index}>
              {task.description} - Status: {task.status || 'not started'}
              <button onClick={() => updateTaskStatus(index, 'completed')}>Complete</button>
              <button onClick={() => updateTaskStatus(index, 'in_progress')}>In Progress</button>
            </li>
          ))
        ) : (
          <li>No tasks available</li>
        )}
      </ul>
    </div>
  );
};

export default CourierDashboard;