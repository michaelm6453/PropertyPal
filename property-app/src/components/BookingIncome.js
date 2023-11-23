import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookingIncome = () => {
  const { id } = useParams();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/booking-income/${id}`)
      .then(response => response.json())
      .then(data => {
        // Format the dates before setting the state
        const formattedData = data.map(booking => ({
          ...booking,
          CheckInDate: new Date(booking.CheckInDate).toLocaleDateString(),
          CheckOutDate: new Date(booking.CheckOutDate).toLocaleDateString(),
        }));
        setBookings(formattedData);
      })
      .catch(error => {
        console.error('Error fetching booking income data:', error);
      });
  }, [id]);

  if (bookings.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Booking Income for Property ID: {id}</h2>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 rounded-tl-lg">Check-In Date</th>
              <th className="py-3 px-6">Check-Out Date</th>
              <th className="py-3 px-6 rounded-tr-lg">Total Amount ($)</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {bookings.map((booking, index) => (
              <tr className="border-b border-gray-200 hover:bg-gray-100" key={index}>
                <td className="py-3 px-6 text-left whitespace-nowrap">{booking.CheckInDate}</td>
                <td className="py-3 px-6 text-left">{booking.CheckOutDate}</td>
                <td className="py-3 px-6 text-right">{booking.TotalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingIncome;
