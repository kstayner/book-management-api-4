// Controller to handle retrieval of all books.
// Calls bookService.getAllBooks and responds with the list of all books in the database.
exports.getAllBooks = async (req, res) => {
    const books = await bookService.getAllBooks();
    res.json(books);
};