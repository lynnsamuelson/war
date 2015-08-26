define(function(require) {
  //var draw = require("draw");
  var drawCard = require("draw-card");
  var getDeck = require("get-deck");
  var Q = require("q");
  var $ = require("jquery");
  var countOne = 0;
  var countTwo = 0;

  return function (cardOneValue, cardTwoValue) {
    var one;
    if (cardOneValue === "JACK") {
      one = 11;
    } else if (cardOneValue === "QUEEN") {
      one = 12;
    } else if (cardOneValue === "KING") { 
      one = 13;
    } else if (cardOneValue === "ACE") {
      one = 14;
    } else {
      one = parseInt(cardOneValue);
    }
    //console.log("one", one);
    //console.log("cardOneValue", cardOneValue);

    var two;
    //console.log("card two value", two);
    if (cardTwoValue === "JACK") {
      two = 11;
    } else if (cardTwoValue === "QUEEN") {
      two = 12;
    } else if (cardTwoValue === "KING") { 
      two = 13;
    } else if (cardTwoValue === "ACE") {
      two = 14;
    } else {
      two = parseInt(cardTwoValue);
    }
    //console.log("two", two);
    //console.log("cardTwoValue", cardTwoValue);
    
    if (one > two) {
      countOne = countOne + 1;
    } else if (two > one) {
      countTwo = countTwo + 1;
    } else {
      console.log("tie");
    }
    console.log("count one", countOne);
    console.log("count two", countTwo);
    $(".score").html("<h4>Player 1: " + countOne + "  Player 2: " + countTwo + "</h4>");
    
  
    //score
    //winner


    
  };
});
    