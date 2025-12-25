require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");

const app = express();
const PORT = process.env.APP_PORT || 3000;

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "tekser_menfess",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// --- ROUTES ---

// 1. Home Page (Lihat semua Menfess)
app.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM menfess ORDER BY created_at DESC"
    );
    res.render("index", { messages: rows });
  } catch (err) {
    console.error(err);
    res.render("index", { messages: [], error: "Database connection failed!" });
  }
});

// 2. Post Menfess Baru
app.post("/send", async (req, res) => {
  const { sender, content, color } = req.body;

  // Validasi simpel
  if (!sender || !content) return res.redirect("/");

  try {
    await pool.query(
      "INSERT INTO menfess (sender, content, color) VALUES (?, ?, ?)",
      [sender, content, color]
    );
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
