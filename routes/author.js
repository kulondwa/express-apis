const express = require("express");
const {
  createAuthor,
  getAllAuthors,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/author");
var router = express.Router();
router.route("/").get(getAllAuthors).post(createAuthor);
router.route("/:id").delete(deleteAuthor).put(updateAuthor);

module.exports = router;
