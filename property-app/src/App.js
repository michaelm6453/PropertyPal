import React, { useState, useEffect } from 'react';
import Property from './components/Property';
import Navbar from './components/Navbar';
import BestPropertiesComponent from './components/BestProperties';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyDetails from './components/PropertyDetails';
import BookingPage from './components/BookingPage'; 
import AvailabilityCheck from './components/AvailabilityCheck'; 

import './App.css';
import "./index.css"

const App = () => {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route exact path="/" element={
          <>
            <div className="flex justify-center items-center">
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
      </Routes>
    </Router>
  );
};

export default App;
