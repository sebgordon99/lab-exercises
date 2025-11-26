const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: "comment" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("post", likeSchema);