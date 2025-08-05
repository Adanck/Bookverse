const listService = require("../services/list.service");

exports.getLists = async (req, res) => {
  try {
    const lists = await listService.getLists(req.user.userId);
    res.json(lists);
  } catch (err) {
    res.status(500).json({ message: "Error fetching lists" });
  }
};

exports.createList = async (req, res) => {
  try {
    const list = await listService.createList(req.user.userId, req.body.title);
    res.status(201).json(list);
  } catch (err) {
    res.status(500).json({ message: "Error creating list" });
  }
};

exports.getListItems = async (req, res) => {
  try {
    const items = await listService.getListItems(req.params.id);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Error fetching list items" });
  }
};

exports.addItemToList = async (req, res) => {
  try {
    const item = await listService.addItemToList(
      req.params.id,
      req.body.userBookId
    );
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: "Error adding item to list" });
  }
};

exports.removeItemFromList = async (req, res) => {
  try {
    await listService.removeItemFromList(req.params.itemId);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: "Error removing item from list" });
  }
};
