// 18. Perform Bulk Insert in MongoDB

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bulk_demo')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', UserSchema);

const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];

User.insertMany(users)
  .then(docs => {
    console.log("Bulk insert successful:", docs);
    mongoose.disconnect();
  })
  .catch(err => console.error("Bulk insert failed:", err));