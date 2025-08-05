const bookService = require("../services/book.service");

exports.searchBooks = async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ message: "Missing search query" });

  try {
    const results = await bookService.searchBooks(query);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error searching books" });
  }
};
