requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'q': '../lib/bower_components/q/q' 
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(["dependencies", "firebase", "get-deck", "draw-card", "draw"], 
  function(dependencies, firebase, getDeck, drawCard, draw) {

    draw();
    //gamePlay();
    // var deckOne = getDeck();
    // var cardOneValue;
    // var cardTwoValue;
    // deckOne.then(function(deck) {
    //   $('#deckOne').on("click", function() {
    //     drawCard(deck).then(function(card) {
    //     //console.log("Deck One", card);
    //     var cardImage = "<img src=" + card.cards[0].image + "></img>";
    //     $('#cardOne').html(cardImage);
    //     console.log("card one", card.cards[0].value);
    //     cardOneValue = card.cards[0].value;
        
    //     });
    //   });
    // });

    // var deckTwo = getDeck();
    // deckTwo.then(function(deck) {
    //   $('#deckTwo').on("click", function() {
    //     drawCard(deck).then(function(card) {
    //     //console.log("Deck two", card);
    //     var cardImage = "<img src=" + card.cards[0].image + "></img>";
    //     $('#cardTwo').html(cardImage);
    //     console.log("card two", card.cards[0].value);
    //     cardTwoValue = card.cards[0].value;
    //     });
    //   });
    // });


  });


//create two decks 
//event handler for drawing cards
//logic for drawing a card on each deck
