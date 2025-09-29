const bookService = require('../services/bookService');
const mongoose = require('mongoose');

exports.createBook = async (req, res) => {
    try {
        const book = await bookService.createBook(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllBooks = async (req, res) => {
    const books = await bookService.getAllBooks();
    res.json(books);
};

exports.getBookById = async (req, res) => {
    try {
        const book = await bookService.getBookById(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const book = await bookService.updateBook(req.params.id, req.body);
        res.json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const message = await bookService.deleteBook(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// PATCH handler
exports.patchBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return res.status(400).json({ error: 'Invalid book id' });
        }
        // Only allow fields: title, author, publishedYear, genre, available
        const allowedFields = ['title', 'author', 'publishedYear', 'genre', 'available'];
        const updateData = {};
        allowedFields.forEach(field => {
            if (req.body[field] !== undefined) updateData[field] = req.body[field];
        });
        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ error: 'No valid fields provided for update' });
        }
        const book = await bookService.patchBook(bookId, updateData);
        res.json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};