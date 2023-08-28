const booksModal = require("../models/books");
const AuthorModal = require("../models/authors");

// create a book
exports.createBook = async (book) => {
  const foundAuthor = AuthorModal.findOne({ name: book.author });
  const bookTosave = new booksModal({
    title: book.title,
    topic: book.title,
    author: foundAuthor._id,
  });
  return await booksModal.create(bookTosave);
};

// get all books
exports.getAllBooks = async () => {
  return await booksModal.find({}).populate("authors");
};
//find book by the id
exports.findById = async (id) => {
  return await booksModal.findById(id);
};

exports.findByTitle = async (title) => {
  return await booksModal.find({ title: title });
};
// update a book
exports.updateBook = async (id, book) => {
  return await booksModal.findByIdAndUpdate(id, book, { new: true });
};

// delete a book

exports.deleteBook = async (id) => {
  return await booksModal.findByIdAndDelete(id);
};
