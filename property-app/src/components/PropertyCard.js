import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div>
      <h3>{property.title}</h3>
      <p>Price: ${property.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PropertyCard;
