kontApp.controller('HomeCtrl', ['$scope', '$http', 'getData', function($scope, $http, getData){
  var datas = ['medelinkomst','barn_fritid_kultur','utbildning','foraldrapenning','BistandMottagSoS','personer_inkomstintervall'];
  // $scope.jsonData = getData.fetch(datas);
  $scope.message = 'hejsan';

  $scope.work = getData.work();

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
}]);
