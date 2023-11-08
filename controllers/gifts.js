const giftsRouter = require("express").Router();
const Gift = require("../models/gift");

// Get all gifts
giftsRouter.get("/", async (req, res) => {
  const gifts = await Gift.find({}).populate("users", {
    name: 1,
    username: 1,
  });
  res.json(gifts);
});

// Get a certain gift by id
giftsRouter.get("/:id", async (req, res) => {
  const gift = await Gift.findById(req.params.id).populate("users", {
    name: 1,
    username: 1,
  });
  res.json(gift);
});

// Create a new gift
giftsRouter.post("/", async (req, res) => {
  const user = req.user;

  // save a gift
  const gift = new Gift({ ...req.body, users: user });
  const savedGift = await gift.save();

  // add gift to user
  user.gifts = user.gifts.concat(savedGift._id);
  await user.save();

  const giftToReturn = await Gift.findById(savedGift._id).populate("users", {
    username: 1,
    name: 1,
  });

  res.status(201).json(giftToReturn);
});

// Delete a gift
giftsRouter.delete("/:id", async (req, res) => {
  const user = req.user;

  const gift = await Gift.findById(req.params.id);

  if (!gift) {
    return res.status(404).json({
      error: "Gift does not exist",
    });
  }

  // user rights check
  const belongsToUser = gift.users.find((u) => {
    return u.toString() === req.user.id;
  });

  const userIsSoleOwner = gift.users.length === 1;

  // authorise user to remove
  if (user.role === "admin" || (belongsToUser && userIsSoleOwner)) {
    await Gift.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } else {
    const message =
      !belongsToUser || !userIsSoleOwner
        ? "Not an owner or sole owner of the gift"
        : "No admin rights";
    return res.status(403).json({
      error: `User is not permitted to modify this resource. ${message}.`,
    });
  }
});

// Update a gift (name, description, url)
giftsRouter.put("/:id", async (req, res) => {
  const gift = req.body;

  const updatedGift = await Gift.findByIdAndUpdate(req.params.id, gift, {
    new: true,
    runValidators: true,
    context: "query",
  }).populate("users", {
    name: 1,
    username: 1,
  });

  res.status(200).json(updatedGift.toJSON()).end();
});

// Update gift reserved property
giftsRouter.patch("/:id", async (req, res) => {
  const gift = req.body;
  const user = req.user;

  const updatedGift = await Gift.findByIdAndUpdate(req.params.id, gift, {
    new: true,
    runValidators: true,
    context: "query",
  }).populate("users", {
    name: 1,
    username: 1,
  });

  // update gifts within user object (reserve or release)
  const isUserPresent = updatedGift.users.find((u) => u.id === user.id);

  if (isUserPresent) {
    user.gifts = user.gifts.concat(updatedGift);
  } else {
    user.gifts.pull(updatedGift);
  }

  await user.save();

  res.status(200).json(updatedGift.toJSON()).end();
});

module.exports = giftsRouter;
