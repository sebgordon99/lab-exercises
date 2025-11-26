"use strict";
let Models = require("../models"); // matches index.js

const getUserPosts = (req, res) => {
  // finds all posts for a given user and populates with user details
  Models.Post.find({ userId: req.params.uid })
    .populate({ path: "author" })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createUserPost = (req, res) => {
  new Models.Post({ ...req.body, author: req.params.id })
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateUserPost = (req, res) => {
  console.log(req.body);
  Models.Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteUserPost = (req, res) => {
  Models.Post.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// api implementation -----------------------------------------------------------
const createAPIUserPost = async (req, res) => {
  try {
    //fetch disney API
    const response = await fetch("https://api.disneyapi.dev/character");
    const json = await response.json();

    //get a random disney character
    const characters = json.data;
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    const imageUrl = randomCharacter.imageUrl; // <-- this is the API image

    //build the post data
    const newPost = new Models.Post({
      title: req.body.title,
      description: req.body.description,
      image_url: imageUrl,         // substitute API image
      author: req.params.id        // the user creating the post
    });

    // 4. Save to MongoDB
    const saved = await newPost.save();

    res.send({ result: 200, data: saved });

  } catch (err) {
    console.error(err);
    res.status(500).send({ result: 500, error: err.message });
  }
};
// api implementation -----------------------------------------------------------

module.exports = {
  getUserPosts,
  createUserPost,
  updateUserPost,
  deleteUserPost,
};
