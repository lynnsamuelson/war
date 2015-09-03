define(function(require) {
  //var draw = require("draw");
  //var gamePlay = require("game-play");
  //var drawCard = require("draw-card");
  //var draw = require("draw");

  var Q = require("q");
  var $ = require("jquery");

  return function (countOne, countTwo) {
    console.log("countOne", countOne);
    if (countOne > countTwo) {
      alert("Player One Wins!");
    } else if (countTwo > countOne) {
      alert("Player Two Wins!");
    } else {
      alert("Tie");
    }
  };

});