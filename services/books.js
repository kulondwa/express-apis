const booksModal = require("../models/books");

// create a book
exports.createBook = async (book) => {
  return await booksModal.create(book);
};

// get all books
exports.getAllBooks = async () => {
  return await booksModal.find({});
};

exports.findById = async (id) => {
  return await booksModal.findById(id);
};
// update a book
exports.updateBook = async (id, book) => {
  return await booksModal.findByIdAndUpdate(id, book, { new: true });
};

// delete a book

exports.deleteBook = async (id) => {
  return await booksModal.findByIdAndDelete(id);
};
