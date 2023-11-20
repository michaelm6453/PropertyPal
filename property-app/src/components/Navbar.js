import React from 'react';
import './Navbar.css'; // Import the external CSS file

const Navbar = () => {
    return (
        <nav>
            <a href="#home">Main Page</a>
            <a href="#login">Login/Logout</a>
            <a href="#rent">Rent</a>
            <a href="#list">List</a>
            <a href="#availability">Check Availability</a>
        </nav>
    );
}

export default Navbar;
