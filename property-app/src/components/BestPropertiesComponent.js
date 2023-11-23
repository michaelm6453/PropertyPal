import React, { useState, useEffect } from 'react';
import Property from './Property'; // Make sure this path is correct

const BestPropertiesComponent = () => {
  const [bestProperties, setBestProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/best-properties') // Endpoint to fetch best properties
      .then(response => response.json())
      .then(data => {
        setBestProperties(data);
      })
      .catch(error => {
        console.error('Error fetching best properties:', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {bestProperties.map(property => (
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
  );
};

export default BestPropertiesComponent;
