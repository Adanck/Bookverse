const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/auth.routes");
const userBookRoutes = require("./routes/userBook.routes");
const bookRoutes = require("./routes/book.routes");
const listRoutes = require("./routes/list.routes");
const statsRoutes = require("./routes/stats.routes");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user-books", userBookRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/lists", listRoutes);
app.use("/api/stats", statsRoutes);

app.get("/", (req, res) => {
  res.send("Bookverse API is running.");
});

module.exports = app;
