/**
 * Database Configuration for Express Backend
 * ------------------------------------------
 * This file handles the setup and initialization of database connection(s) 
 * used across the project. It provides the configuration and 
 * connection logic for accessing the database via Node.js.
 * 
 * Usage:
 *   Import this file wherever database access is required in the backend layer.
 * 
 * Note:
 *   - Modify database credentials and connection settings here during development or deployment.
 *   - Ensure sensitive information is managed securely in production.
 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

module.exports = mongoose;