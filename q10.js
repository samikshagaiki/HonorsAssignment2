// 10. JWT Authentication with Express.js

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3002;
const SECRET = "my_secret_key";

app.use(express.json());

// Fake user data
const user = {
  id: 1,
  username: "admin",
  password: "admin123"
};

// Login - generate token
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected route
app.get('/protected', (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({ message: 'Protected content', user: decoded });
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
});

app.listen(PORT, () => {
  console.log(`JWT Auth server running on http://localhost:${PORT}`);
});