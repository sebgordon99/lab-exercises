let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all users
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

// Adds a POST route to create a new user
router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

//post routes------------------------

router.get("/:id/posts", (req, res) => {
    // console.log("get user posts", req)
  Controllers.postController.getUserPosts(req, res);
});

router.post("/create/:id/posts", (req, res) => {
  Controllers.postController.createUserPost(req, res);
});

router.put("/:id/posts", (req, res) => {
    console.log("update user posts")
  Controllers.postController.updateUserPost(req, res);
});

router.delete("/:id/posts", (req, res) => {
  Controllers.postController.deleteUserPost(req, res);
});

module.exports = router;
