kontApp.controller('HomeCtrl', ['$scope', '$location', '$http', 'getData', function($scope, $location, $http, getData){
  if($location.search().age < 1)
    $location.path('/').search({age: $location.search().age}); // Redirect to start page

  $scope.age = $location.search().age;
  var datas = ['medelinkomst','barn_fritid_kultur','utbildning','foraldrapenning','BistandMottagSoS','personer_inkomstintervall'];

  $scope.year = 2005;

  $scope.data = {};

  $scope.salary = {
    2005: [115.1, 89.5]
    // 2006: [122.2, 94.8],
    // 2007: [132.6, 100.6],
    // 2008: [137.2, 104.4],
    // 2009: [123.0, 97.3],
    // 2010: [122.7, 97.1],
    // 2011: [136.3, 104.5],
    // 2012: [140.1, 109.3],
    // 2013: [139.9, 112.7]
  };

  // $scope.labels = ["", "Arbetstimmar", "Utdelat bistånd", "Föräldraledighet", "May", "June", "July"];
  $scope.labels = ['Män', 'Kvinnor'];

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
}]);
