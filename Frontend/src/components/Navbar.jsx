import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css'; // Optional: for styling your Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
      <li className="navbar-item">
          <Link to="/signup" className="navbar-link">Signup</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">Login</Link>
        </li>
      
        <li className="navbar-item">
          <Link to="/recipes" className="navbar-link">Recipes</Link>
        </li>
        <li className="navbar-item">
          <Link to="/add-recipe" className="navbar-link">Add Recipe</Link>
        </li>
        <li className="navbar-item">
          <Link to="/grocery-list" className="navbar-link">Grocery List</Link>
        </li>
        <li className="navbar-item">
          <Link to="/share-list" className="navbar-link">Share List</Link>
        </li>
        <li className="navbar-item">
          <Link to="/meal-plan" className="navbar-link">Weekly Meal Plan</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
