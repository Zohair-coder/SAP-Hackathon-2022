const mongoose = require("mongoose");
const models = require("./models");

const mongoose_username = "admin-zohair";
const mongoose_password = "sY8MzK6NIxL8HLEz";
const database_name = "missingpiecedb";

mongoose.connect(
  `mongodb+srv://${mongoose_username}:${mongoose_password}@cluster0.hfpl4qv.mongodb.net/${database_name}`
);

function registerUser(name, email, password) {
  return models.User.create({
    name,
    email: email,
    password: password,
    items: [],
  });
}

async function loginUser(email, password) {
  const user = await models.User.findOne({ email: email });
  return user.password === password;
}

async function getUserById(userId) {
  const user = await models.User.findById(userId);
  return use;
}

module.exports = { registerUser, loginUser };
