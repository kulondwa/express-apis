const authorModal = require("../models/authors");

// create an author
exports.createAuthor = async (author) => {
  return await authorModal.create(author);
};

//get all authors
exports.getAllAuthors = async () => {
  return await authorModal.find({});
};

// update an author
exports.updateAuhtor = async (id, author) => {
  return await authorModal.findByIdAndUpdate(id, author);
};

exports.deleteAuthor = async (id) => {
  return await authorModal.findByIdAndDelete(id);
};
