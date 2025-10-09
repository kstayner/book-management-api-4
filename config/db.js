// test-001
// test-002
// test-003
/**
 * MongoDB configuration file for the Express backend.
 * Sets up and exports the Mongoose connection used throughout the project.
 * This centralizes MongoDB connection logic, ensuring maintainability and
 * reusability by importing this file wherever database access is required.
 */

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

module.exports = mongoose;
