const statsService = require("../services/stats.service");

exports.getSummaryStats = async (req, res) => {
  try {
    const stats = await statsService.getSummaryStats(req.user.userId);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: "Error fetching summary stats" });
  }
};

exports.getMonthlyStats = async (req, res) => {
  try {
    const stats = await statsService.getMonthlyStats(req.user.userId);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: "Error fetching monthly stats" });
  }
};

exports.getGenreStats = async (req, res) => {
  try {
    const stats = await statsService.getGenreStats(req.user.userId);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: "Error fetching genre stats" });
  }
};
