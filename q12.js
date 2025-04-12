// 12. Upload and Retrieve an Image Using Multer

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3004;

// Setup Multer
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Serve static images
app.use('/uploads', express.static('uploads'));

// Upload endpoint
app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ filename: req.file.filename, url: `/uploads/${req.file.filename}` });
});

// Sample endpoint to get list of uploaded images
app.get('/images', (req, res) => {
  const files = fs.readdirSync('./uploads');
  res.json(files);
});

app.listen(PORT, () => {
  console.log(`Image upload server running on http://localhost:${PORT}`);
});