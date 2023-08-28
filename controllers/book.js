const booksServices = require("../services/books");
const AuthorServices = require("../services/author");
const AuthorModal = require("../models/authors");
const BookModal = require("../models/books");

//create a book
exports.createBook = async (req, res) => {
  try {
    const bookTosave = {
      title: req.body.title,
      topic: req.body.title,
    };
    const book = await booksServices
      .createBook(bookTosave)
      .then((Savedbook) => {
        res.json({ data: Savedbook, status: "success" });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = booksServices.getAllBooks({});
    const booksArray = (await books).map((book) => {
      return {
        id: book.id,
        title: book.title,
        topic: book.topic,
      };
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
  if (booksServices.updateBook({ _id: req.body._id }, req.body)) {
    const updatedBook = booksServices
      .findById({ _id: req.body._id })
      .then((book) => {
        res.json({ data: book, status: "success" });
      })
      .catch((err) => {
        return err;
      });
  }
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

exports.createBookByAuthor = async (req, res) => {
  const found = AuthorModal.findOne({ name: req.body.author });
  let bookToSave = new BookModal({
    title: req.body.title,
    topic: req.body.topic,
    author: found._id,
  });

  bookToSave.save().then((book) => {
    res.json({ data: book });
  });
};
