"use strict";
let Models = require("../models"); // matches index.js

const getUserLikes = (req, res) => {
  Models.Like.find({ userId: req.params.uid })
    .populate({ path: "author" })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createUserLike = (req, res) => {
  new Models.Like({ ...req.body, author: req.params.id })
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateUserLike = (req, res) => {
  console.log(req.body);
  Models.Like.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteUserLike = (req, res) => {
  Models.Like.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUserLikes,
  createUserLike,
  updateUserLike,
  deleteUserLike,
};
