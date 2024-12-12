import React from "react";

const HomePage = ({ tasks, setTasks }) => {
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id) => {
    // For now, just redirect to the edit page
    window.location.href = `/edit/${id}`;
  };

  return (
    <div className="container">
      <h2>Task List</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-card">
            <div className="task-header">
              <h3>{task.title}</h3>
              <div className="task-actions">
                <button onClick={() => updateTask(task.id)} className="update-btn">
                  Update
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
