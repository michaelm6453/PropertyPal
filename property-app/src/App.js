import React, { useState, useEffect } from 'react';
import Property from './components/Property';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PropertyListings from './components/PropertyListings';
import BestPropertiesComponent from './components/BestProperties';


const App = () => {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/properties')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Add this line to log the data
        setProperties(data);
      })
      .catch((error) => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };


  return (
    <div>
      <Navbar />
      <BestPropertiesComponent />
      <h1>Welcome to PropertyPal</h1>
      <SearchBar onSearch={handleSearch} />
      <PropertyListings searchQuery={searchQuery} />
      <div className="property-list">
        {properties.map((property, index) => (
          <Property
            key={index}
            PropertyID={property.PropertyID}
            Title={property.Title}
            Description={property.Description}
            OwnerID={property.OwnerID}
            Price={property.Price}
            Location={property.Location}
            AvailabilityStartDate={property.AvailabilityStartDate}
            AvailabilityEndDate={property.AvailabilityEndDate}
            Images={property.Images}
          />
        ))}
      </div>
    </div>
  );
};



export default App;
