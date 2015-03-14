kontApp.controller('HomeCtrl', ['$scope', '$location', '$http', 'getData', function($scope, $location, $http, getData){
  if($location.search().age < 1)
    $location.path('/').search({age: $location.search().age}); // Redirect to start page

  $scope.age = $location.search().age;
  var datas = ['medelinkomst','barn_fritid_kultur','utbildning','foraldrapenning','BistandMottagSoS','personer_inkomstintervall'];

  $scope.year = 2005;

  $scope.data = {
    2005: [
      [Math.log2(115.1), 2, 3],
      [Math.log2(89.5), 2, 1]
    ],
    2006: [
      [122.2/108.8, 2, 3],
      [94.8/108.8, 2, 3]
    ],
    2007: [
      [132.6/117.0, 2, 3],
      [100.6/117.0, 2, 3]
    ],
    2008: [
      [137.2/121.2, 2, 3],
      [104.4/121.2, 2, 3]
    ],
    2009: [
      [123.0/110.4, 2, 3],
      [97.3/110.4, 2, 3]
    ],
    2010: [
      [122.7/110.2, 2, 3],
      [97.1/110.2, 2, 3]
    ],
    2011: [
      [136.3/120.7, 2, 3],
      [104.5/120.7, 2, 3]
    ],
    2012: [
      [140.1/125.0, 2, 3],
      [109.3/125.0, 2, 3]
    ],
    2013: [
      [139.9/126.6, 2, 3],
      [112.7/126.6, 2, 3]
    ]
  }

  $scope.labels = ["Medelinkomst", "Arbetstimmar", "Utdelat bistånd", "Föräldraledighet", "May", "June", "July"];
  $scope.series = ['Män', 'Kvinnor'];
  // $scope.data = [
  //   [65, 59, 80, 81, 56, 55, 40],
  //   [28, 48, 40, 19, 86, 27, 90]
  // ];

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
}]);
