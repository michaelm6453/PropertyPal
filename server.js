// server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3001;

// Use cors middleware
app.use(cors());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root', 
  database: 'PropertyPal',
  waitForConnections: true,
  connectionLimit: 10, 
  queueLimit: 0,
});

app.get('/properties', (req, res) => {
  // Use the pool to get a connection and execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from pool:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    connection.query('SELECT * FROM properties', (error, results) => {
      // Release the connection back to the pool after executing the query
      connection.release();

      if (error) {
        console.error('Error fetching properties:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });
});

// Endpoint for PropertyOwnerReviewsInfo view
app.get('/property-owner-reviews-info', (req, res) => {
  const query = 'SELECT * FROM PropertyOwnerReviewsInfo';
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching property owner reviews info:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Endpoint for AveragePropertyRatings view
app.get('/average-property-ratings', (req, res) => {
  const query = 'SELECT * FROM AveragePropertyRatings';
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching average property ratings:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Endpoint for PropertyBookingIncome view
app.get('/property-booking-income', (req, res) => {
  const query = 'SELECT * FROM PropertyBookingIncome';
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching property booking income:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Endpoint for PropertyBookingDetails view
app.get('/property-booking-details', (req, res) => {
  const query = 'SELECT * FROM PropertyBookingDetails';
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching property booking details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Endpoint for UserFavoriteProperties view
app.get('/user-favorite-properties', (req, res) => {
  const query = 'SELECT * FROM UserFavoriteProperties';
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching user favorite properties:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Endpoint for CheapListings view
app.get('/cheap-listings', (req, res) => {
  const query = 'SELECT * FROM CheapListings';
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching cheap listings:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Endpoint for PropertyBookingOwnerInfo view
app.get('/property-booking-owner-info', (req, res) => {
  const query = 'SELECT * FROM PropertyBookingOwnerInfo';
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching property booking owner info:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Endpoint for HighRatedProperties view
app.get('/high-rated-properties', (req, res) => {
  const query = 'SELECT * FROM HighRatedProperties';
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching high-rated properties:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Endpoint for PropertiesBookedInDateRange view
app.get('/properties-booked-in-date-range', (req, res) => {
  const query = 'SELECT * FROM PropertiesBookedInDateRange';
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching properties booked in date range:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
