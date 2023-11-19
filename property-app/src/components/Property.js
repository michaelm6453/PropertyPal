// Property.js
import React from 'react';

const Property = ({
  PropertyID,
  Title,
  Description,
  OwnerID,
  Price,
  Location,
  AvailabilityStartDate,
  AvailabilityEndDate,
  Images,
}) => {
  return (
    <div className="property">
      <h2>{Title}</h2>
      <p>{Description}</p>
      <p>Price: {Price}</p>
      {/* Add other elements using the corresponding props */}
      {Images && <img src={Images} alt={`Property`} />}
    </div>
  );
};

export default Property;
