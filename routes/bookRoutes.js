const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

/**
 * @route POST /books
 * @desc Create a new book record
 * @access Public (implement auth if required in project)
 */
router.post('/books', bookController.createBook);

/**
 * @route GET /books
 * @desc Retrieve all books
 * @access Public
 */
router.get('/books', bookController.getAllBooks);

/**
 * @route GET /books/:id
 * @desc Retrieve a single book by ID
 * @access Public
 */
router.get('/books/:id', bookController.getBookById);

/**
 * @route PUT /books/:id
 * @desc Update an existing book by ID
 * @access Public
 */
router.put('/books/:id', bookController.updateBook);

/**
 * @route DELETE /books/:id
 * @desc Delete a book by ID
 * @access Public
 */
router.delete('/books/:id', bookController.deleteBook);



module.exports = router;