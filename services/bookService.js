// Import Book model to interact with the books collection in the database
const Book = require('../models/Book');

/**
 * Validates the provided book data.
 * Ensures that the publishedYear is not in the future.
 * Throws an error if validation fails.
 */
const validateBookData = (bookData) => {
    if (bookData.publishedYear > new Date().getFullYear()) {
        throw new Error('Published year cannot be in the future.');
    }
};

/**
 * Creates a new book record in the database.
 * Validates the input data before saving.
 * @param {Object} bookData - The data for the new book
 * @returns {Object} The created book document
 */
exports.createBook = async (bookData) => {
    validateBookData(bookData);
    const book = new Book(bookData);
    return await book.save();
};

/**
 * Retrieves all book records from the database.
 * @returns {Array} An array of all book documents
 */
exports.getAllBooks = async () => {
    return await Book.find();
};

/**
 * Retrieves a single book by its ID.
 * Throws an error if the book is not found.
 * @param {String} bookId - The ID of the book to retrieve
 * @returns {Object} The book document, if found
 */
exports.getBookById = async (bookId) => {
    const book = await Book.findById(bookId);
    if (!book) throw new Error('Book not found');
    return book;
};

/**
 * Updates an existing book record by its ID.
 * Validates the input data before updating.
 * Throws an error if the book is not found.
 * @param {String} bookId - The ID of the book to update
 * @param {Object} updateData - The data to update the book with
 * @returns {Object} The updated book document
 */
exports.updateBook = async (bookId, updateData) => {
    validateBookData(updateData);
    const book = await Book.findByIdAndUpdate(bookId, updateData, { new: true, runValidators: true });
    if (!book) throw new Error('Book not found');
    return book;
};

/**
 * Deletes a book record by its ID.
 * Throws an error if the book is not found.
 * @param {String} bookId - The ID of the book to delete
 * @returns {Object} A message indicating successful deletion
 */
exports.deleteBook = async (bookId) => {
    const book = await Book.findByIdAndDelete(bookId);
    if (!book) throw new Error('Book not found');
    return { message: 'Book deleted successfully' };
};