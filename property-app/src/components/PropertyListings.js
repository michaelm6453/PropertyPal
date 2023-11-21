import React from 'react';
import PropertyCard from './PropertyCard';

const mockData = [
  { id: 1, title: 'Cozy Apartment', price: 100 },
  { id: 2, title: 'Luxury Villa', price: 300 },
  // Add more mock data as needed
];

const PropertyListings = ({ searchQuery }) => {
  const filteredProperties = mockData.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Property Listings</h2>
      {filteredProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyListings;
