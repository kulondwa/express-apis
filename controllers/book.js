const booksServices = require("../services/books");

//create a book
exports.createBook = async (req, res) => {
  try {
    const book = await booksServices.createBook(req.body);
    res.json({ data: book, status: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = booksServices.getAllBooks();
    res.json({ data: books, status: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// update a book
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = booksServices.updateBook(req.params.id, req.body);
    res.json({ data: updatedBook, status: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete a book
exports.deleteBookById = async (req, res) => {
  try {
    const deletedBook = booksServices.deleteBook(req.params.id);
    res.json({ data: deletedBook, status: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
