// 19. Fetch API Data and Store in Database

const axios = require('axios');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/api_data')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PostSchema = new mongoose.Schema({
  id: Number,
  title: String,
  body: String
});

const Post = mongoose.model('Post', PostSchema);

const fetchAndStore = async () => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
    await Post.insertMany(data);
    console.log("Data saved to DB");
    mongoose.disconnect();
  } catch (err) {
    console.error("Error:", err);
  }
};

fetchAndStore();