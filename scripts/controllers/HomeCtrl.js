kontApp.controller('HomeCtrl', ['$scope', '$location', '$http', 'getData', function($scope, $location, $http, getData){
  if($location.search().age < 1)
    $location.path('/').search({age: $location.search().age}); // Redirect to start page

  $scope.age = $location.search().age;
  var datas = ['medelinkomst','barn_fritid_kultur','utbildning','foraldrapenning','BistandMottagSoS','personer_inkomstintervall'];

  $scope.year = 2005;
  $scope.salary = {
    2005: [115.1, 89.5],
    2006: [122.2, 94.8],
    2007: [132.6, 100.6],
    2008: [137.2, 104.4],
    2009: [123.0, 97.3],
    2010: [122.7, 97.1],
    2011: [136.3, 104.5],
    2012: [140.1, 109.3],
    2013: [139.9, 112.7]
  };
  $scope.work = {
    2005: [39.6, 34.8],
    2006: [39.5, 34.7],
    2007: [39.5, 34.6],
    2008: [39.4, 34.7],
    2009: [39.2, 34.7],
    2010: [39.2, 34.8],
    2011: [39.1, 34.9],
    2012: [39.1, 35.0],
    2013: [39.0, 35.0]
  };
  $scope.parenting = {
    2005: [8319861, 34338497],
    2006: [8957876, 34526064],
    2007: [9434533, 35856118],
    2008: [10143062, 37117288],
    2009: [10669822, 37169343],
    2010: [11489945, 38228681],
    2011: [11921088, 38363061],
    2012: [12407072, 38370595],
    2013: [12741697, 38706268]
  };

  Chart.defaults.global.colours = ["#ED931C", "#22B38A", "#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"];
  $scope.labels = ['Män', 'Kvinnor'];
}]);
