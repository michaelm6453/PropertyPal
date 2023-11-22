import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PropertyDetails = () => {
  const [propertyDetails, setPropertyDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/property/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPropertyDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching property details:', error);
      });
  }, [id]);

  if (!propertyDetails) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="relative">
        <img src={propertyDetails.Images} alt={propertyDetails.Title} className="w-full h-auto rounded-lg" />
        <div className="absolute top-0 left-0 m-4">
          <h2 className="text-white text-2xl bg-black bg-opacity-50 p-2 rounded-md">{propertyDetails.Title}</h2>
          <p className="text-white text-lg bg-black bg-opacity-50 p-2 rounded-md mt-2">{propertyDetails.Location}</p>
          <p className="text-white text-xl bg-black bg-opacity-50 p-2 rounded-md mt-2">${propertyDetails.Price}</p>
        </div>
      </div>
      <div className="mt-4 text-gray-700 text-base leading-relaxed rounded-md border border-gray-500 p-4">
        {propertyDetails.Description}
      </div>

      {/* Center the "Book This Property" button */}
      <div className="flex justify-center space-x-4">
        <Link to={`/booking/${id}`} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Book This Property
        </Link>
        <Link to={`/availability/${id}`} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Check Availability
        </Link>
      </div>
    </div>
  );
};

export default PropertyDetails;
