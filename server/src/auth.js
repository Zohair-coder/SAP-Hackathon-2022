const express = require("express");
const router = express.Router();
const db = require("./database/database");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  let user;
  try {
    user = await db.registerUser(username, email, password);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
  res.send(user._id);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await db.loginUser(email, password);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
  if (user) {
    res.send(user._id);
  } else {
    res.status(401).send("User unauthorized");
  }
});

module.exports = router;
