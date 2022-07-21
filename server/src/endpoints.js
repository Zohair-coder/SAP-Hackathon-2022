const express = require("express");
const router = express.Router();

db = require("./database/database");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  let user;
  try {
    user = await db.registerUser(name, email, password);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
  res.send(user._id);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let isLoggedIn;
  try {
    isLoggedIn = await db.loginUser(email, password);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
  if (isLoggedIn) {
    res.send("User logged in");
  } else {
    res.status(401).send("User unauthorized");
  }
});

router.get("/fridge/items", async (req, res) => {
  const userId = req.headers.userId;
  if (!userId) {
    return res.status(400).send("User id not provided in request body");
  }
  const user = await db.getUserById(userId);
  if (!user) {
    return res.status(404).send("User not found or unauthorized");
  }

  res.send(user.items);
});

module.exports = router;
