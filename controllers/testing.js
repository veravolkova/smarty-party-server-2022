const router = require("express").Router();
const Gift = require("../models/gift");
const User = require("../models/user");

router.post("/reset", async (request, response) => {
  await Gift.deleteMany({});
  await User.deleteMany({});

  response.status(204).end();
});

module.exports = router;
