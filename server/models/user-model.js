const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, index: true, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model("User", UserSchema);
