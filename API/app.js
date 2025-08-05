const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const authRoutes = require("./routes/auth.routes");
const bookRoutes = require("./routes/book.routes");
const userBookRoutes = require("./routes/userBook.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/user-books", userBookRoutes);

app.get("/", (req, res) => {
  res.send("Book Manager API is running.");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));