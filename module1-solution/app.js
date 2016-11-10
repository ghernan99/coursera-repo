(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkLunch = function () {    

    var numberOfDishes = isEmpty($scope.lunchDishes) 
                          ? 0 
                          : $scope.lunchDishes.split(',').filter(isNotEmpty).length;
    
    if (numberOfDishes == 0)
    {
        $scope.messageOverLunch = "Please enter data first";
        $scope.colorCue="red";
        return;
    }
    
    $scope.messageOverLunch = (numberOfDishes<=3) ? "Enjoy!" : "Too much!";
    $scope.colorCue="green";
  }
}

function isEmpty(element)
{  
  return !element || element.trim().length == 0;
}

function isNotEmpty(element)
{
  return !isEmpty(element);
}
})();


