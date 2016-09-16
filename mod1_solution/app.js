(function(){
  var LunchCheck = angular.module('LunchCheck', []);
  LunchCheck.controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController($scope){
    $scope.dishes = "";
    $scope.message = "";
    $scope.color = "green";
    $scope.border_style = "none";

    $scope.checkLunch = function() {
      $scope.border_style = "solid";
      var arr = $scope.dishes.split(",");
      arr = arr.filter(function(n){ return n.trim().length > 0 });
      if ($scope.dishes.length < 1){
        $scope.message = "Please enter data first";
        $scope.color = "red";
      }
      else if (arr.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.color = "green";
      }
      else{
        $scope.message = "Too much!"; 
        $scope.color = "green";
      }
    };

  };  
})();
