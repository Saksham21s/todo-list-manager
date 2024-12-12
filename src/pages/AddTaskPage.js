import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTaskPage = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && description && status) {
      const newTask = {
        id: Date.now(), // unique task ID
        title,
        description,
        status,
      };

      addTask(newTask); // Call addTask function to add the new task

      // Clear form and redirect to the HomePage
      setTitle("");
      setDescription("");
      setStatus("");
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <label>Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskPage;
