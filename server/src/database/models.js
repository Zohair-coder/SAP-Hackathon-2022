const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  items: [
    {
      name: String,
      id: String,
      image: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
