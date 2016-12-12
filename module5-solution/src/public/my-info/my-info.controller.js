(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['isUserSignedUp'];
function MyInfoController(isUserSignedUp) {
  var $ctrl = this;
  $ctrl.isUserSignedUp = isUserSignedUp;
}

})();
