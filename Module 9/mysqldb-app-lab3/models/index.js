"use strict";
const User = require("./user"); //require the model
const Post = require("./post");
const Comment = require("./comment");
const Like = require("./like");

async function init() {
  await User.sync(); // sync the model
  // also sync any extra models here
  await Post.sync();
  await Comment.sync();
  await Like.sync();
}

init();

Post.belongsTo(User);
Comment.belongsTo(User);
Like.belongsTo(User);
User.hasMany(Post);
User.hasMany(Comment);
User.hasMany(Like);

module.exports = {
  User, // export the model
  // also export any extra models here
  Post,
  Comment,
  Like,
};
