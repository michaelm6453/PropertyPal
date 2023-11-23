// AvailabilityCheck.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

const AvailabilityCheck = () => {
  const { id } = useParams(); // This is the property ID
  const [bookingData, setBookingData] = useState([]);
  const [propertyDetails, setPropertyDetails] = useState(null);

  useEffect(() => {
    // Fetch property details
    fetch(`http://localhost:3001/property/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPropertyDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching property details:', error);
      });

    // Fetch booking data
    fetch(`http://localhost:3001/bookings/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBookingData(data);
      })
      .catch((error) => {
        console.error('Error fetching booking data:', error);
      });
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'yyyy-MM-dd'); // Using date-fns to format date
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {propertyDetails && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Property Details:</h2>
          <table className="min-w-full mb-6 leading-normal rounded-lg overflow-hidden">
            <tbody>
              <tr>
                <td className="px-5 py-5 bg-white text-sm border-b border-gray-400">
                  Title: {propertyDetails.Title}
                </td>
                <td className="px-5 py-5 bg-white text-sm border-b border-gray-400">
                  Owner ID: {propertyDetails.OwnerID}
                </td>
                <td className="px-5 py-5 bg-white text-sm border-b border-gray-400">
                  Price: ${propertyDetails.Price}
                </td>
                <td className="px-5 py-5 bg-white text-sm border-b border-gray-400">
                  Location: {propertyDetails.Location}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

    <div className="max-w-6xl mx-auto p-4">
    <h1 className="text-2xl font-semibold text-gray-700 mb-4">
        The property you have selected is available for all days except the following:
    </h1>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-400 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              PropertyId
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-400 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              TravelerId
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-400 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              CheckInDate
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-400 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              CheckOutDate
            </th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((booking) => (
            <tr key={booking.BookingID}>
              <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                {booking.PropertyID}
              </td>
              <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                {booking.TravelerID}
              </td>
              <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                {formatDate(booking.CheckInDate)}
              </td>
              <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                {formatDate(booking.CheckOutDate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>
  );
};
export default AvailabilityCheck;