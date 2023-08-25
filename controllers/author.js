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
    const authors = await authorServices.getAllAuthors();
    const authorsArray = authors.map((author) => {
      return {
        id: author.id,
        name: author.name,
        email: author.email,
        age: author.age,
      };
    });
    res.json({ data: authorsArray, status: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// update an author
exports.updateAuthor = async (req, res) => {
  if (authorServices.updateAuhtor({ _id: req.body._id }, req.body)) {
    const updatedAuhtor = authorServices
      .getAuthorById({ _id: req.body._id })
      .then((author) => {
        res.json({ data: author, message: "success" });
      })
      .catch((err) => {
        res.json({ message: err.message, err: err });
      });
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
