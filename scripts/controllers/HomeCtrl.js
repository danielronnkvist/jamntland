kontApp.controller('HomeCtrl', ['$scope', '$http', 'getData', function($scope, $http, getData){
  var datas = ['medelinkomst','barn_fritid_kultur','utbildning','foraldrapenning','BistandMottagSoS','personer_inkomstintervall'];
  $scope.data = getData.fetch(datas);
}]);
