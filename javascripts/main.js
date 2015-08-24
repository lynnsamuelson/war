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

requirejs(["dependencies", "firebase", "get-deck", "draw-card", "game-play"], 
  function(dependencies, firebase, getDeck, drawCard, gamePlay) {
    var deckOne = getDeck();
    deckOne.then(function(deck) {
      drawCard(deck).then(function(card) {
        console.log("Deck One", card);
        
      });
      //console.log("from main", deck.deck_id);
      //console.log("deck", deck);
      gamePlay();
    });

    var deckTwo = getDeck();
    deckOne.then(function(deck) {
      drawCard(deck).then(function(card) {
        console.log("Deck Two", card);
      });
      //console.log("from main", deck.deck_id);
      //console.log("deck", deck);
      gamePlay();
    });


  });


//create two decks 
//event handler for drawing cards
//logic for drawing a card on each deck
