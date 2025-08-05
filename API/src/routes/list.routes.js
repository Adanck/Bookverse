const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const {
  getLists,
  createList,
  getListItems,
  addItemToList,
  removeItemFromList,
} = require("../controllers/list.controller");

router.use(verifyToken);

router.get("/", getLists);
router.post("/", createList);
router.get("/:id", getListItems);
router.post("/:id/items", addItemToList);
router.delete("/:id/items/:itemId", removeItemFromList);

module.exports = router;
