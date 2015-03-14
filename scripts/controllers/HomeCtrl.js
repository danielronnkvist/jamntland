kontApp.controller('HomeCtrl', ['$scope', '$location', '$http', 'getData', function($scope, $location, $http, getData){
  $scope.work = {};
  if($location.search().age < 1)
    $location.path('/').search({age: $location.search().age}); // Redirect to start page

  $scope.age = $location.search().age;
  var datas = ['medelinkomst','barn_fritid_kultur','utbildning','foraldrapenning','BistandMottagSoS','personer_inkomstintervall'];
  // $scope.jsonData = getData.fetch(datas);
  $scope.message = 'hejsan';

  getData.work().then(function(data) {
    console.log(data);
    $scope.work = data;


    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [$scope.work.males[2014], 48, 40, 19, 86, 27, 90]
    ];
  });

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
}]);
