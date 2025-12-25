require("dotenv").config();
const mysql = require("mysql2/promise");

// Bikin koneksi pool
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "menfesapp",
  password: process.env.DB_PASS || "password123",
  database: process.env.DB_NAME || "tekser_menfess",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Cek koneksi tipis-tipis (Opsional, buat debug aja)
db.getConnection()
  .then((connection) => {
    console.log("✅ Database connected successfully");
    connection.release();
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
  });

module.exports = db;
