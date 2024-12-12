import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-title">
        <h1>To-Do List Manager</h1>
      </div>
      <div className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/add" className="nav-link">Add Task</Link>
        <input
          type="text"
          className="search-bar"
          placeholder="Search by Title"
          onChange={handleSearchChange}
        />
      </div>
    </header>
  );
};

export default Header;
