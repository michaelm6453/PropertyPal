// BestPropertiesComponent.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BestPropertiesComponent = () => {
  const [bestProperties, setBestProperties] = useState([]);

  useEffect(() => {
    const fetchBestProperties = async () => {
      try {
        const response = await axios.get('http://localhost:3001/best-properties');
        setBestProperties(response.data);
      } catch (error) {
        console.error('Error fetching best properties:', error);
      }
    };

    fetchBestProperties();
  }, []);

  return (
    <div>
      <h1>Best Properties</h1>
      <ul>
        {bestProperties.map(property => (
          <li key={property.PropertyID}>{property.Title} - Rating: {property.Rating}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPropertiesComponent;
