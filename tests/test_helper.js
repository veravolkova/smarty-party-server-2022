const Gift = require("../models/gift");
const User = require("../models/user");

const usersInDb = async () => {
  const users = await User.find({});
  return users.map(u => u.toJSON());
};

const initialGifts = [
  {
    name: "Barbie doll",
    description: "Doll changing color in cold water",
    url: "https://fullstackopen.com/",
    reserved: false,
    users: []
  },
  {
    name: "L.O.L Surprise doll",
    description: "Spy confetti serries",
    url: "https://fullstackopen.com/",
    reserved: false,
    users: []
  }
];

const giftsInDb = async () => {
  const gifts = await Gift.find({});
  return gifts.map(gift => gift.toJSON());
};

module.exports = {
  initialGifts,
  giftsInDb,
  usersInDb,
};
