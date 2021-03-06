const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    confirmation: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    status: {
      type: String,
      default: "Waiting for confirmation",
      enum: ["Pending confirmation", "Active"]
    }
  },
  {
    timestamps: true
  }
);


const User = mongoose.model('User', userSchema);
module.exports = User;
