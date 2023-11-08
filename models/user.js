const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    minlength: 3,
    required: true,
  },
  name: String,
  passwordHash: String,
  role: {
    type: String,
    minlength: 3,
    required: true,
    enum: ["guest", "basic", "admin"],
    default: "basic",
  },
  gifts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gift",
    },
  ],
});

userSchema.plugin(uniqueValidator);

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

module.exports = mongoose.model("User", userSchema);
