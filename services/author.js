const authorModal = require("../models/authors");

// create an author
exports.createAuthor = async (author) => {
  return await authorModal.create(author);
};

//get all authors
exports.getAllAuthors = async () => {
  return await authorModal.find({});
};

// get the authoor by name
exports.findByName = async (name) => {
  return await authorModal.find({ name: name });
};

// get author by ID
exports.getAuthorById = async (id) => {
  return await authorModal.findById(id);
};

// update an author
exports.updateAuhtor = async (id, author) => {
  return await authorModal.findByIdAndUpdate(id, author, { new: true });
};

exports.deleteAuthor = async (id) => {
  return await authorModal.findByIdAndDelete(id);
};
