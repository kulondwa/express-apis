const express = require("express");
var router = express.Router();
const {
  createBook,
  getAllBooks,
  updateBook,
  deleteBookById,
} = require("../controllers/book");
router.route("/book").get(getAllBooks).post(createBook);
router.route("/book/:id").put(updateBook).delete(deleteBookById);

module.exports = router;
