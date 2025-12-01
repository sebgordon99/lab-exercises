const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users // (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

// matches POST requests sent to /api/users/create
router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

// matches PUT requests to /api/users/123 (stores 123 in id param)
router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

// matches DELETE requests to /api/users/123 (123 in id param)
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

//post routes -----------------------------------------------------

// router.get("/", (req, res) => {
//   Controllers.postController.getUserPosts(req, res);
// });

router.get("/posts", (req, res) => {
  Controllers.postController.getPosts(res);
});

// matches POST requests sent to /api/users/create
router.post("/create/post/:id", (req, res) => {
  Controllers.postController.createPost(req, res);
});

router.put("/post/:id", (req, res) => {
  Controllers.postController.updatePost(req, res);
});

// matches DELETE requests to /api/users/123 (123 in id param)
router.delete("/post/delete/:id", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

//comment routes ---------------------------------------------------------------

router.get("/comments", (req, res) => {
  Controllers.commentController.getComments(res);
});

router.post("/create/comment/:id", (req, res) => {
  Controllers.commentController.createComment(req, res);
});

router.put("/comment/:id", (req, res) => {
  Controllers.commentController.updateComment(req, res);
});

router.delete("/comment/delete/:id", (req, res) => {
  Controllers.commentController.deleteComment(req, res);
});

//like routes --------------------------------------------------------------------

router.get("/likes", (req, res) => {
  Controllers.likeController.getLikes(res);
});

router.post("/create/like/:id", (req, res) => {
  Controllers.likeController.createLike(req, res);
});

router.put("/like/:id", (req, res) => {
  Controllers.likeController.updateLike(req, res);
});

router.delete("/like/delete/:id", (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

module.exports = router;
