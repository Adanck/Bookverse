const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const {
  getUserBooks,
  saveUserBook,
  updateUserBook,
  deleteUserBook,
} = require("../controllers/userBook.controller");

router.use(verifyToken); // Protege todas las rutas de abajo

router.get("/", getUserBooks);
router.post("/", saveUserBook);
router.put("/:id", updateUserBook);
router.delete("/:id", deleteUserBook);

module.exports = router;
