const express = require("express");
var router = express.Router();
const {
  createBook,
  getAllBooks,
  updateBook,
  deleteBookById,
} = require("../controllers/book");
router.route("/").get(getAllBooks).post(createBook);
router.route("/").put(updateBook);
router.route("").delete(deleteBookById);

module.exports = router;
