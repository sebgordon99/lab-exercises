const express = require("express");
const router = express.Router();
const friends = require("../models/friends");

// default endpoint, gets all friends
router.get("/", (req, res) => {
  res.json(friends);
});

// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter

router.get("/filter", (req, res) => {
  console.log(req.query);

  let matchingFriends = [];

  //   let filterGender = req.query.gender;
  let filterLetter = req.query.letter;

  //   if (filterGender) {
  //     matchingFriends = friends.filter(
  //       (friend) => friend.gender == filterGender
  //     );
  //   }

  if (filterLetter) {
    matchingFriends = friends.filter(
      (friend) => friend.name[0].toLowerCase() == filterLetter.toLowerCase(),
    );
  }

  if (matchingFriends.length > 0) {
    // return valid data when the letter matches
    res.status(200).json(matchingFriends);
  } else {
    // and an error response when there are no matches
    res
      .status(404)
      .json({
        error: "No friends matching letter starting with " + filterLetter,
      });
  }
});

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data
router.get("/info", (req, res) => {
  console.log(req.headers);

  // Modify this response to just return info on the user-agent, content-type and accept headers
  //   res.json(req.headers); --------------- original
  const headers = req.headers;

  const subset = (({
    "user-agent": userAgent,
    "content-type": contentType,
    accept: accept,
  }) => ({
    "user-agent": userAgent,
    "content-type": contentType,
    accept: accept,
  }))(headers);

  res.json(subset);
});

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter

router.get("/:id", (req, res) => {
  console.log(req.params);
  let friendId = req.params.id;

  let matchingFriends = [];

  let filterId = req.params.id;

  if (filterId) {
    matchingFriends = friends.filter((friend) => friend.id == filterId);
  }

  console.log(filterId, "------");
  console.log(friendId);

  if (matchingFriends.length == 0) {
    res.status(404).json({ error: "No friends matching id " + filterId });
  } else {
    res.json(matchingFriends[0]);
  }
});

module.exports = router;
