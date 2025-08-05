const userBookService = require("../services/userBook.service");

exports.getUserBooks = async (req, res) => {
  try {
    const books = await userBookService.getUserBooks(req.user.userId);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user books" });
  }
};

exports.saveUserBook = async (req, res) => {
  try {
    const book = await userBookService.saveUserBook(req.user.userId, req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: "Error saving book" });
  }
};

exports.updateUserBook = async (req, res) => {
  try {
    const updated = await userBookService.updateUserBook(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating book" });
  }
};

exports.deleteUserBook = async (req, res) => {
  try {
    await userBookService.deleteUserBook(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: "Error deleting book" });
  }
};
