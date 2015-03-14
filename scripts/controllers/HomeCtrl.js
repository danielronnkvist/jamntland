kontApp.controller('HomeCtrl', ['$scope', function($scope){
  $scope.message = 'hejsan';
  $scope.myData = [10, 20, 30, 1];
  console.log('data: ', $scope.myData);
}]);
