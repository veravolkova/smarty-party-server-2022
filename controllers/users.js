const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (req, res) => {
  const users = await User.find({}).populate("gifts", { name: 1, url: 1 });
  res.json(users);
});

usersRouter.post("/", async (req, res) => {
  const body = req.body;

  if (!body.password || body.password.length < 3) {
    return res.status(400).json({
      error: "Password should be at least 3 characters long",
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
    gifts: body.gifts,
  });

  const savedUser = await user.save();
  res.status(201).json(savedUser);
});

module.exports = usersRouter;
