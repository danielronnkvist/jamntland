kontApp.controller('StartCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){
  if($location.search().age < 1)
    $scope.ageInfo = true;

  $scope.changeView = function(){
    if(typeof $scope.age === "number"){
      $location.path('/home').search({age: $scope.age});
    }else{
      $scope.error = true;
    }
  }
}]);
