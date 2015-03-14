kontApp.factory('getData', ['$http', function($http){
  return{
    fetch: function(datas){
      var result = {};
      for(data in datas){
        $http.get('data/'+data+'.json').success(function(response){
          result[data] = response;
        }).error(function(response){
          console.error(response);
        });
      }
      return result;
    }
  }
}]);
