import React, { useState, useEffect } from 'react';
import Property from './components/Property';
import Navbar from './components/Navbar';
import BestPropertiesComponent from './components/BestPropertiesComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyDetails from './components/PropertyDetails';
import BookingPage from './components/BookingPage'; 
import AvailabilityCheck from './components/AvailabilityCheck'; 
import AuthModal from './components/AuthModal';
import BookingIncome from './components/BookingIncome'; //Adjust paths as needed.

import './App.css';
import "./index.css"

const App = () => {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');


  useEffect(() => {
    fetch('http://localhost:3001/properties')
      .then(response => response.json())
      .then(data => {
        setProperties(data);
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProperties = properties.filter(property =>
    property.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogout = () => {
    setUser(null); // Reset user to null on logout
    // We can perform any additional logout logic here (like clearing local storage, etc.)
  };

  const handleLogin = async (credentials) => {
    try {
      setError(''); // Clear any existing errors
      // The URL should not contain the password or any sensitive information
      const response = await fetch('http://localhost:3001/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Logged in:', data);
        setShowModal(false);
        setUser(data.user); // Save the user data
      } else {
        console.error('Login failed:', data);
        setError(data.message || 'Failed to log in'); // Set an error message
      }
    } catch (error) {
      console.error('Network error:', error);
      setError('Network error'); // Set an error message
    }
  };


  const handleRegister = async (userInfo) => {
    try {
      setError(''); // Clear any existing errors
      const response = await fetch('http://localhost:3001/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registered:', data);
        setShowModal(false);
        // Optionally log the user in immediately after registration
        setUser({ ...userInfo, userId: data.userId }); // Save the user data
      } else {
        console.error('Registration failed:', data);
        setError(data.message || 'Failed to register'); // Set an error message
      }
    } catch (error) {
      console.error('Network error:', error);
      setError('Network error'); // Set an error message
    }
  };


  return (
    <Router>
      <Navbar 
        onSearch={handleSearch} 
        onLoginClick={() => setShowModal(true)} 
        isLoggedIn={!!user} // Boolean value representing login status
        onLogoutClick={handleLogout}
      />
      {showModal && (
        <AuthModal
          onClose={() => setShowModal(false)}
          onLogin={handleLogin}
          onRegister={handleRegister}
        />
      )}
      <Routes>
        <Route exact path="/" element={
          <>
            <div className="flex justify-center items-center mt-6">
              <h1 className="text-6xl text-gray-700 font-bebas">Welcome to PropertyPal</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {filteredProperties.map(property => (
                <div className="p-6" key={property.PropertyID}> {/* Padding for each card */}
                  <Property
                    PropertyID={property.PropertyID}
                    Title={property.Title}
                    Description={property.Description}
                    OwnerID={property.OwnerID}
                    Price={property.Price}
                    Location={property.Location}
                    AvailabilityStartDate={property.AvailabilityStartDate}
                    AvailabilityEndDate={property.AvailabilityEndDate}
                    Images={property.Images}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </>
        } />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/availability/:id" element={<AvailabilityCheck />} />
        <Route path="/booking-income/:id" element={<BookingIncome />} />
        <Route path="/best-properties" element={<BestPropertiesComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
