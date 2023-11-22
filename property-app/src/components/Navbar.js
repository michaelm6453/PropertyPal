import React from 'react';
import './Navbar.css';
import SearchBar from './SearchBar'; // Assuming you have this file

const Navbar = ({ onSearch, onLoginClick, isLoggedIn, onLogoutClick }) =>  {
  console.log("Is Logged In:", isLoggedIn); 
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="https://cdn4.vectorstock.com/i/1000x1000/00/53/cute-happy-smiling-house-vector-29340053.jpg" alt="PropertyPal Logo" />
      </div>
      <SearchBar onSearch={onSearch} />
      <div className="navbar-links">
        <a href="/rent">Rent</a>
        <a href="/list">List</a>
        {/* Include other links as necessary */}
      </div>
      <div className="navbar-user">
      {isLoggedIn ? (
          <button onClick={onLogoutClick}>Logout</button>
        ) : (
          <button onClick={onLoginClick}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
