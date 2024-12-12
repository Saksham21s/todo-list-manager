import './App.css';
import React, { useState } from 'react';
import TaskList from './components/TaskList'; // Ensure correct import path

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description for Task 1', status: 'Pending' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', status: 'Completed' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'Pending' });
  const [editTask, setEditTask] = useState(null); // Used for editing tasks

  // Handle search functionality
  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle Add Task form
  const handleAddTaskClick = () => {
    setShowAddTask(!showAddTask);
    if (editTask) {
      setNewTask({ title: editTask.title, description: editTask.description, status: editTask.status });
    }
  };

  // Handle adding or updating a task
  const handleSaveTask = () => {
    if (editTask) {
      // Update task
      const updatedTasks = tasks.map((task) =>
        task.id === editTask.id
          ? { ...task, title: newTask.title, description: newTask.description, status: newTask.status }
          : task
      );
      setTasks(updatedTasks);
      setEditTask(null); // Reset edit task state
    } else {
      // Add new task
      const newId = tasks.length + 1;
      setTasks([...tasks, { id: newId, ...newTask }]);
    }
    setShowAddTask(false);
    setNewTask({ title: '', description: '', status: 'Pending' }); // Reset task input fields
  };

  // Handle delete task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Handle task edit
  const handleEditTask = (task) => {
    setEditTask(task);
    setNewTask({ title: task.title, description: task.description, status: task.status });
    setShowAddTask(true);
  };

  // Toggle task status between "Pending" and "Completed"
  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header-title">
          <h1>Todo List Manager</h1>
        </div>

        <div className="navbar">
          <button className="nav-btn" onClick={() => setShowAddTask(false)}>
            Home
          </button>
          <button className="nav-btn" onClick={handleAddTaskClick}>
            {showAddTask ? 'Cancel' : 'Add Task'}
          </button>
        </div>

        <input
          type="text"
          placeholder="Search tasks"
          className="search-bar"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </header>

      {/* Conditionally render Add Task form or Task List */}
      {showAddTask ? (
        <div className="add-task-card">
          <h2>{editTask ? 'Update Task' : 'Add a New Task'}</h2>
          <input
            type="text"
            placeholder="Task Title"
            className="task-input"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <textarea
            placeholder="Task Description"
            className="task-textarea"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          ></textarea>
          <select
            className="status-select"
            value={newTask.status}
            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <button className="submit-btn" onClick={handleSaveTask}>
            {editTask ? 'Update Task' : 'Save Task'}
          </button>
        </div>
      ) : (
        <TaskList
          tasks={filteredTasks}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
          toggleTaskStatus={toggleTaskStatus}
        />
      )}
    </div>
  );
}

export default App;
