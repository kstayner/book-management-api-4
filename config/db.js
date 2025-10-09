/**
 * Database Configuration (config/db.js)
 *
 * Sets up and exports the MongoDB connection for the Express backend using Mongoose.
 * This file centralizes the database connection logic, making it reusable and easily maintainable.
 * When required in other modules, it provides access to the connected Mongoose instance for database operations.
 */

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

module.exports = mongoose;