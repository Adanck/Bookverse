const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const {
  getSummaryStats,
  getMonthlyStats,
  getGenreStats
} = require("../controllers/stats.controller");

router.use(verifyToken);

router.get("/summary", getSummaryStats);
router.get("/monthly", getMonthlyStats);
router.get("/genres", getGenreStats);

module.exports = router;
