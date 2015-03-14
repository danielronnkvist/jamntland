kontApp.factory('getData', ['$http', function($http){
  var fetch =  function(data) {
    var promise = $http.get('data/'+data+'.json').then(function(response){
      // success!
      return response.data;
    }).catch(function(response) {
      // error!
      console.error(response);
    });
    return promise;
  }

  return {
    aid: function() {
      var data = fetch('foraldrapenning').then(function(resp) {
        console.log(resp);
        return resp;
      });

      return data;
    }
  };
}]);
