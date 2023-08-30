const booksServices = require("../services/books");
const AuthorServices = require("../services/author");
const AuthorModal = require("../models/authors");
const BookModal = require("../models/books");

//create a book
exports.createBook = async (req, res) => {
  const author = await AuthorModal.findOne({ name: req.body.author });
  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }
  const book = new BookModal({
    title: req.body.title,
    topic: req.body.topic,
    author: author._id,
  });
  await book.save();
  res.json(book);
};

//get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = BookModal.find({}).populate("author");
    const booksArray = (await books).map((book) => {
      return book;
    });
    res.json({ data: booksArray, status: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get book by title
exports.getBookByTitle = async (req, res) => {
  booksServices
    .findByTitle(req.body.title)
    .then((book) => {
      res.json({ data: book, message: "success" });
    })
    .catch((err) => {
      // res.json({ message: err.message, err: err });
      console.log(err);
    });
};

// update a book
exports.updateBook = async (req, res) => {
  const foundBook = BookModal.findById(req.body.id);
  if (!foundBook) {
    res.json({ message: "book not found", status: 404 });
  }
  const Author = await AuthorModal.findOne({ name: req.body.author });
  const newBook = new BookModal({
    _id: req.body.id,
    title: req.body.title,
    topic: req.body.topic,
    author: Author._id,
  });
  await BookModal.findByIdAndUpdate(req.body.id, newBook, { new: true });
  res.json({ data: newBook, message: "item successfully updated" });
};

// delete a book
exports.deleteBookById = async (req, res) => {
  const findBook = booksServices.findById({ _id: req.body.id });
  if (findBook) {
    booksServices
      .deleteBook({ _id: req.body.id })
      .then((book) => {
        res.json({ data: book, message: "successfully deleted" });
      })
      .catch((err) => {
        res.json({ message: err.message, err: err });
      });
  } else {
    res.json({ message: "not found", status: 404 });
  }
};

// exports.createBookByAuthor = async (req, res) => {
//   const found = AuthorModal.findOne({ name: req.body.author });
//   let bookToSave = new BookModal({
//     title: req.body.title,
//     topic: req.body.topic,
//   });

//   bookToSave.populate("author", "_id");

//   bookToSave.save().then((book) => {
//     res.json({ data: book });
//   });
// };
