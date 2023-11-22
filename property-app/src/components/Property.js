// Property.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "./Property.css";

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
  let navigate = useNavigate(); // Initialize the useNavigate hook

  const navigateToDetails = () => {
    navigate(`/property/${PropertyID}`); // Navigate to the property details page
  };

  return (
    <div className="property" onClick={navigateToDetails}>
      <div className="property-image">
        {Images && <img src={Images} alt={Title} className="w-full" />} {/* Ensure image takes full width */}
      </div>
      <div className="property-info">
        <h2 className="property-title">{Title}</h2>
        <p className="property-description">{Description}</p>
        <p className="property-price">Price: {Price}</p>
        {/* Add other elements using the corresponding props */}
      </div>
    </div>
  );
};

export default Property;
