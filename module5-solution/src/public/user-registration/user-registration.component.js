(function () {
"use strict";

angular.module('public')
.component('userRegistration', {
  templateUrl: 'src/public/user-registration/menu-item.html',
  bindings: {
    menuItem: '<'
  },
  controller: MenuItemController
});


MenuItemController.$inject = ['ApiPath'];
function MenuItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
