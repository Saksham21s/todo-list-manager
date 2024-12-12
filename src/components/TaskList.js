import React from 'react';

function TaskList({ tasks, handleDeleteTask, handleEditTask, toggleTaskStatus }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-list-item">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="task-status">
            <span
              className={task.status === 'Completed' ? 'completed' : 'pending'}
            >
              {task.status}
            </span>
          </div>
          <div className="task-actions">
            <button
              className="status-btn"
              onClick={() => toggleTaskStatus(task.id)}
            >
              Toggle Status
            </button>
            <button
              className="status-btn"
              onClick={() => handleEditTask(task)}
            >
              Edit
            </button>
            <button
              className="status-btn"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
