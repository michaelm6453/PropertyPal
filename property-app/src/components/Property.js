import React from 'react';

const Property = ({ title, description, price }) => {
  return (
    <div className="property">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default Property;
