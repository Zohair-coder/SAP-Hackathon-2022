const mongoose = require("mongoose");
const models = require("./models");

const mongoose_username = "admin-zohair";
const mongoose_password = "sY8MzK6NIxL8HLEz";
const database_name = "missingpiecedb";

mongoose.connect(
  `mongodb+srv://${mongoose_username}:${mongoose_password}@cluster0.hfpl4qv.mongodb.net/${database_name}`
);

function registerUser(name, email, password) {
  return models.User.create(
    {
      name,
      email: email,
      password: password,
      items: [],
    },
    function (err, user) {
      if (err) {
        throw err;
      } else {
        console.log("User created: " + user);
      }
    }
  );
}

async function loginUser(email, password) {
  await models.User.findOne({ email: email }, function (err, user) {
    if (err) {
      throw err;
    }
    return user.password === password;
  });
}

module.exports = { registerUser, loginUser };
