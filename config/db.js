/**
 * Database Configuration File
 * 
 * This module sets up and exports the MongoDB connection for the Express backend using Mongoose.
 * It centralizes the database connection logic, ensuring reusability and maintainability across the project.
 * When imported into other modules, it provides access to the connected Mongoose instance,
 * enabling database operations within the application.
 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

module.exports = mongoose;