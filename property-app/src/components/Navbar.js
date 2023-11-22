  import React from 'react';
  import './Navbar.css';
  import SearchBar from './SearchBar'; // Assuming you have this file


  const Navbar = ({ onSearch }) => {
      
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
          <a href="/login">Login/Logout</a>
          {/* Include user-related actions */}
        </div>
      </div>
    );
  };

  export default Navbar;
