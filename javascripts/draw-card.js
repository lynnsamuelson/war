define(function(require) {
  var deck = require("get-deck");
  var Q = require("q");
  var $ = require("jquery");

  return function(deck) {

    var deferred = Q.defer();
    

   $.ajax ({url:"http://deckofcardsapi.com/api/deck/" + deck.deck_id + "/draw/?count=1"})
   .done(function(card) {
      deferred.resolve(card);
      //console.log("card", card);
   }).fail(function(xhr, status, error) {
      deferred.reject(error);
      console.log("The error is ", error);

   });
   return deferred.promise;
    
  };

});