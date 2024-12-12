import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditTaskPage = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", description: "", status: "" });

  useEffect(() => {
    const existingTask = tasks.find((t) => t.id === parseInt(id));
    if (existingTask) setTask(existingTask);
  }, [id, tasks]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map((t) =>
      t.id === parseInt(id) ? { ...task, id: t.id } : t
    );
    setTasks(updatedTasks);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Edit Task</h2>
      <form onSubmit={handleUpdate}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleInputChange}
          required
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleInputChange}
          required
        ></textarea>
        <label>Status:</label>
        <select
          name="status"
          value={task.status}
          onChange={handleInputChange}
          required
        >
          <option value="">Select</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTaskPage;
