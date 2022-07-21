const express = require("express");
const router = express.Router();

const db = require("./database/database");

router.get("/items", async (req, res) => {
  const userId = req.headers.userid;
  if (!userId) {
    return res.status(400).send("User id not provided in request header");
  }
  const user = await db.getUserById(userId);
  if (!user) {
    return res.status(404).send("User not found or unauthorized");
  }
  res.send(user);
});

router.post("/items", async (req, res) => {
  const userId = req.headers.userid;
  if (!userId) {
    return res.status(400).send("User id not provided in request header");
  }
  const user = await db.getUserById(userId);
  if (!user) {
    return res.status(404).send("User not found or unauthorized");
  }
  const { item_name, item_id, item_image } = req.body;
  const item = db.addItem(userId, item_name, item_id, item_image);
  res.send(item);
});

// router.delete()

module.exports = router;
