kontApp.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('data/medelinkomst.json').success(function(response){
    $scope.data = response;
  }).error(function(response){
    console.error(response);
  });
}]);
