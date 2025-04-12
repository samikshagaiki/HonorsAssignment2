// 9. CRUD Operations Using MongoDB and Mongoose

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/crud_demo')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const ItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number
});

const Item = mongoose.model('Item', ItemSchema);

// CREATE
app.post('/items', async (req, res) => {
  const item = await Item.create(req.body);
  res.status(201).json(item);
});

// READ
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// UPDATE
app.put('/items/:id', async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

// DELETE
app.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});