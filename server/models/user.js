const mongoose = require("mongoose");
const { string } = require("prop-types");

const UserSchema = mongoose.Schema({
  name: {
    type: string,
    required: [true, ""],
  },
});
