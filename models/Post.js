const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  portrait: {
    type: Number,
    required: true,
  },
  color: {
    type: Number,
    required: true,
  },
  bw: {
    type: Number,
    required: true,
  },
  light: {
    type: Number,
    required: true,
  },
  abstract: {
    type: Number,
    required: true,
  },
  perspective: {
    type: Number,
    required: true,
  },
  landscape: {
    type: Number,
    required: true,
  },
  movement: {
    type: Number,
    required: true,
  },
  street: {
    type: Number,
    required: true,
  },
  funny: {
    type: Number,
    required: true,
  },




  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
