const express = require('express');
const app = express();
app.use(express.json());

let data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" }
];

// GET all items
app.get('/items', (req, res) => {
  res.json(data);
});

// POST a new item
app.post('/items', (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  data.push(newItem);
  res.status(201).json(newItem);
});

// PUT update an item
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data[index] = { id, ...req.body };
    res.json(data[index]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// DELETE an item
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter(item => item.id !== id);
  res.json({ message: "Item deleted" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
