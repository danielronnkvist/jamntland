kontApp.controller('HomeCtrl', ['$scope', '$location', '$http', 'getData', function($scope, $location, $http, getData){
  $scope.work = {};
  if($location.search().age < 1)
    $location.path('/').search({age: $location.search().age}); // Redirect to start page

  $scope.age = $location.search().age;

  getData.work().then(function(data) {
    console.log(data);
    $scope.work = data;

    $scope.labels = _.pluck(data.males, 'year');
    $scope.data = [
      _.pluck(data.males, 'value'),
      _.pluck(data.females, 'value')
    ];
  });

  $scope.series = ['Males', 'Females'];

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  var getValue = function(collection, year) {
    return _.pluck(_.where(collection, {'year': year}), 'value');
  }
}]);
