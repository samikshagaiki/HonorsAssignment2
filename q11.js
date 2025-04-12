// 11. Rate Limiting Middleware in Express.js

const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 3003;

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests, try again later."
});

app.use(limiter);

app.get('/', (req, res) => {
  res.send("This route is rate-limited.");
});

app.listen(PORT, () => {
  console.log(`Rate-limited server running at http://localhost:${PORT}`);
});