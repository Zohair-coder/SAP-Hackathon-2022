const express = require("express");
const router = express.Router();

const db = require("./database/database");

router.get("/items/:userId", async (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    return res.status(400).send("User id not provided in request header");
  }
  const user = await db.getUserById(userId);
  if (!user) {
    return res.status(404).send("User not found or unauthorized");
  }
  res.send(user.items);
});

router.post("/items/:userId", async (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    return res.status(400).send("User id not provided in request header");
  }
  let user = await db.getUserById(userId);
  if (!user) {
    return res.status(404).send("User not found or unauthorized");
  }
  const { item_name, item_id, item_image } = req.body;
  db.addItem(userId, item_name, item_id, item_image);
  user = await db.getUserById(userId);
  res.send(user.items);
});

// router.delete()

module.exports = router;
