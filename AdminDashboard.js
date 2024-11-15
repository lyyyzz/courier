import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage when the component mounts
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={index}>
              {task.description} - {task.priority} - {task.dueDate}
            </li>
          ))
        ) : (
          <li>No tasks available</li>
        )}
      </ul>
    </div>
  );
};

export default AdminDashboard;


