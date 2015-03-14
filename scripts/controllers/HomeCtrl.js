kontApp.controller('HomeCtrl', ['$scope', '$http', 'getData', function($scope, $http, getData){
  $scope.data = getData.fetch();
}]);
