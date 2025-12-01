"use strict";
const User = require("./user"); //require the model
const Post = require("./post");
const Comment = require("./comment");
const Like = require("./like");

Post.belongsTo(User, { foreignKey: "author" });
Comment.belongsTo(User, { foreignKey: "author" });
Like.belongsTo(User, { foreignKey: "author" });
Comment.belongsTo(Post, { foreignKey: "post_id" });
Like.belongsTo(Post, { foreignKey: "post_id" });
Like.belongsTo(Comment, { foreignKey: "comment_id" });
User.hasMany(Post, { foreignKey: "author" });
User.hasMany(Comment, { foreignKey: "author" });
User.hasMany(Like, { foreignKey: "author" });
Post.hasMany(Comment, { foreignKey: "post_id" });
Post.hasMany(Like, { foreignKey: "post_id" });
Comment.hasMany(Like, { foreignKey: "comment_id" });

async function init() {
  await User.sync();
  await Post.sync();
  await Comment.sync();
  await Like.sync();
}

init();

module.exports = {
  User,
  Post,
  Comment,
  Like,
};
