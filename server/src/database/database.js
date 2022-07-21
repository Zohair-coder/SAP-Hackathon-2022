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
  if (user.password === password) {
    return user;
  } else {
    return false;
  }
}

async function getUserById(userId) {
  return models.User.findById(userId);
}

async function addItem(userId, itemName, itemId, itemImage) {
  await models.User.updateOne(
    { _id: userId },
    { $push: { items: { name: itemName, id: itemId, image: itemImage } } }
  );
  return models.User.findById(userId);
}

module.exports = { registerUser, loginUser, getUserById, addItem };
