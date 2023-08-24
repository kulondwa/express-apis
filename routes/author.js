const express = require("express");
const {
  createAuthor,
  getAllAuthors,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/author");
var router = express.Router();
router.route("/author").get(getAllAuthors).post(createAuthor);
router.route("/author/:id").delete(deleteAuthor).put(updateAuthor);

module.exports = router;
