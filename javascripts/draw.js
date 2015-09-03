define(function(require) {
  var getDeck = require("get-deck");
  var gamePlay = require("game-play");
  //var winner = require("winner");
  var $ = require("jquery");
  var drawCard = require("draw-card");

  var deckOne = getDeck();
  var cardOneValue;
  var cardTwoValue;
  var cardOneRemaining;
  var cardTwoRemaining;

  return (function () {
    deckOne.then(function(deck) {
      //console.log(deck);
      $('#deckOne').on("click", function() {
        drawCard(deck).then(function(card) {
        var cardImage = "<img src=" + card.cards[0].image + "></img>";
        $('#cardOne').html(cardImage);
        cardOneValue = card.cards[0].value;
        //console.log("card one", cardOneValue);
        cardOneRemaining = card.remaining;
        
        });
      });
    });

    var deckTwo = getDeck();
    deckTwo.then(function(deck) {
      $('#deckTwo').on("click", function() {
        drawCard(deck).then(function(card) {
        //console.log("Deck two", card);
        var cardImage = "<img src=" + card.cards[0].image + "></img>";
        $('#cardTwo').html(cardImage);
        //console.log("card two", card.cards[0].value);
        cardTwoValue = card.cards[0].value;
        cardTwoRemaining = card.remaining;

        });
      });
    });

  $("#compare").on("click", function () {
    gamePlay(cardOneValue, cardOneRemaining, cardTwoValue, cardTwoRemaining);
  });
    
  });
});