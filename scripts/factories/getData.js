kontApp.factory('getData', ['$http', function($http){
  return{
    fetch: function(){
      var datas = ['medelinkomst','barn_fritid_kultur','utbildning','foraldrapenning','BistandMottagSoS','personer_inkomstintervall'];
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
