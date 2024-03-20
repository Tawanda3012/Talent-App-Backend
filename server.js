const express = require('express');
const mongoose = require('mongoose');
const profileRoutes = require('./routes/profile'); 
const db = require('./db'); // Import the Mongoose connection object

const app = express();

// Use the Mongoose connection from db.js
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/profiles', profileRoutes); 

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});