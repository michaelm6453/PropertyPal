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

// ... other endpoints

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
