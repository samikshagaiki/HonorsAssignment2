// 15. Implement Caching Using Redis

const express = require('express');
const redis = require('redis');

const app = express();
const PORT = 3005;
const client = redis.createClient();

client.on('error', err => console.error('Redis Error:', err));
client.connect();

app.get('/data', async (req, res) => {
  const cached = await client.get('key');

  if (cached) {
    return res.json({ data: JSON.parse(cached), source: 'cache' });
  }

  const data = { message: 'Hello from DB!', time: new Date().toISOString() };
  await client.set('key', JSON.stringify(data), { EX: 30 }); // cache for 30s
  res.json({ data, source: 'server' });
});

app.listen(PORT, () => {
  console.log(`Redis caching server running on http://localhost:${PORT}`);
});