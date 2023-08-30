const express = require("express");
var router = express.Router();
const {
  createBook,
  getAllBooks,
  updateBook,
  deleteBookById,
  getBookByTitle,
  createBookByAuthor,
} = require("../controllers/book");
router.route("/").get(getAllBooks).post(createBook);
router.route("/").put(updateBook);
router.route("").delete(deleteBookById);
router.route("/book/title").get(getBookByTitle);
// router.route("/author").post(createBookByAuthor);

module.exports = router;
