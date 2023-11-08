const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const helper = require("../utils/helper");

const giftSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    unique: true,
    required: true,
  },
  description: String,
  url: {
    type: String,
    required: false,
  },
  // to implement later
  // so that several users can buy one gift
  /*   numberOfUsers: {
    type: Number,
    max: 5,
    required: true
  }, */
  reserved: {
    type: Boolean,
    default: false,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

giftSchema.path("url").validate((val) => {
  // either null or matching pattern
  const urlRegex = helper.urlRegex;
  return urlRegex.test(val);
}, "Invalid URL.");

giftSchema.plugin(uniqueValidator);

giftSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Gift", giftSchema);
