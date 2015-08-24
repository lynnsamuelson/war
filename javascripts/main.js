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

requirejs(["dependencies", "firebase", "get-deck", "draw-card"], 
  function(dependencies, firebase, getDeck, drawCard) {
    var newDeck = getDeck();
    newDeck.then(function(deck) {
      console.log("from main", deck.deck_id);
      console.log("deck", deck);

      drawCard(deck);
    });

  });

