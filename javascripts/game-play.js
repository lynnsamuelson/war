define(function(require) {
  //var draw = require("draw");
  var drawCard = require("draw-card");
  var getDeck = require("get-deck");
  var Q = require("q");
  var $ = require("jquery");




  return function (cardOneValue, cardTwoValue) {
    var one;
    if (cardOneValue === "JACK") {
      console.log(cardOneValue);
      one === 11;
    } else if (cardOneValue === QUEEN) {
      one === 12;
    } else if (cardOneValue === KING) { 
      one === 13;
    } else if (cardOneValue === ACE) {
      one === 14;
    } else {
      one = parseInt(cardOneValue);
    }
    console.log("one", one);


    var two = parseInt(cardTwoValue);
    //console.log("card two value", two);
    
  };
});
    