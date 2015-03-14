kontApp.controller('StartCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){
  $scope.changeView = function(view){
    console.log(typeof $scope.age)
    if(typeof $scope.age === "number"){
      $rootScope.age = $scope.age;
      $location.path(view);
    }else{
      $scope.error = true;
    }
  }
}]);
