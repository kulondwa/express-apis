const express = require("express");
const {
  createAuthor,
  getAllAuthors,
  updateAuthor,
  deleteAuthor,
  getAuthorByName,
} = require("../controllers/author");
var router = express.Router();
router.route("/").get(getAllAuthors).post(createAuthor);
router.route("/").delete(deleteAuthor);
router.route("/").put(updateAuthor);
router.route("/author").get(getAuthorByName);

module.exports = router;
