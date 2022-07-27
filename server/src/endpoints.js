const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth"));
router.use("/fridge", require("./fridge"));
router.use("/users", require("./users"));

module.exports = router;
