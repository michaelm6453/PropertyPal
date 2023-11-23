import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { id } = useParams(); // Assuming this is the property ID
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Placeholder for current user ID - replace with actual user context or state
  const currentUserID = 1; // Replace with actual logic to fetch the current user's ID

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleBooking = () => {
    if (!checkInDate || !checkOutDate) {
      alert('Please select both check-in and check-out dates.');
      return;
    }
  
    // Function to format the date in 'yyyy/MM/dd' format
    const formatDate = (date) => {
      const d = new Date(date);
      let month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;  
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');
    };
  
    const bookingData = {
      PropertyID: parseInt(id, 10),
      TravelerID: currentUserID, // Replace this with actual logic to get the current user's ID
      CheckInDate: formatDate(checkInDate),
      CheckOutDate: formatDate(checkOutDate),
    };
  

    fetch('http://localhost:3001/Bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      if (data.success) {
        setShowConfirmation(true);
      } else {
        alert('Booking failed. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error during booking:', error);
      alert('An error occurred while booking. Please try again later.');
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Select Booking Dates</h2>

      <div className="flex justify-left">
        {/* Check-In Date Picker */}
        <div className="mr-2">
          <DatePicker
            selected={checkInDate}
            onChange={handleCheckInDateChange}
            dateFormat="MM/dd/yyyy"
            minDate={new Date()} // Prevent selecting past dates
            className="border border-gray-300 px-2 py-1 rounded"
            placeholderText="Check-In Date"
          />
        </div>

        {/* Check-Out Date Picker */}
        <div className="ml-2">
          <DatePicker
            selected={checkOutDate}
            onChange={handleCheckOutDateChange}
            dateFormat="MM/dd/yyyy"
            minDate={checkInDate || new Date()} // Prevent selecting past dates and dates before Check-In
            className="border border-gray-300 px-2 py-1 rounded"
            placeholderText="Check-Out Date"
          />
        </div>
      </div>

      <button
        onClick={handleBooking}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Book Now
      </button>

      {showConfirmation && (
        <div className="mt-4 bg-green-200 border-green-500 border-l-4 p-4 rounded">
          Thank you for your booking!
        </div>
      )}
    </div>
  );
};

export default BookingPage;
