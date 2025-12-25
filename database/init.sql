CREATE TABLE IF NOT EXISTS menfess (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    color VARCHAR(20) DEFAULT 'bg-white',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    -- TODO : Tambahkan kolom likes & dislikes di bawah ini --
    -- Clue: Gunakan tipe data INT dan DEFAULT 0 --
);

-- Dummy Data (Biar pas pertama run ga kosong melompong)
INSERT INTO menfess (sender, content, color) VALUES 
('Admin Ganteng', 'Selamat datang di Tekser Menfess! Silakan tumpahkan isi hati kalian di sini. Keep it sopan ya gaes!', 'bg-blue-100'),
('Maba Tersesat', 'Kak, gedung C sebelah mana ya? Kok aku muter-muter nemunya kantin doang...', 'bg-yellow-100'),
('Pejuang Skripsi', 'Info dosen pembimbing yang fast respon dong...', 'bg-red-100');