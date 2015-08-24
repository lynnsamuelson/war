define(function(require) {
  
return function(data) {

  var Q = require("q");
  var $ = require("jquery");
  var deferred = Q.defer();


  $.ajax({
        url: "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
        method: "GET",
      }).done(function(data) {
        deferred.resolve(data);
      })
      .fail(function(xhr, status, error) {
      deferred.reject(error);
      console.log("The error is ", error);
    });
   
    return deferred.promise;

  };
});