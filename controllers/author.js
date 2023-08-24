const authorServices = require("../services/author");

//create an author
exports.createAuthor = async (req, res) => {
  try {
    const author = await authorServices.createAuthor(req.body);
    res.json({ data: author, status: "success" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// get all authors
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = (await authorServices.getAllAuthors()).toString();
    res.json({ data: authors, status: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// update an author
exports.updateAuthor = async (req, res) => {
  try {
    const updatedAuthor = authorServices.updateAuhtor(req.params.id, req.body);
    res.json({ data: updatedAuthor, status: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete an author
exports.deleteAuthor = async (req, res) => {
  try {
    const deletedAuthor = await authorServices.deleteAuthor(req.params.id);
    res.json({ data: deletedAuthor, status: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
