(function () {
"use strict";

angular.module('public')
.component('userDetails', {
  templateUrl: 'src/public/user-details/user-details.html',
   bindings: {
     userRegistration: '<'
   },
  controller: UserDetailsController
});

 UserDetailsController.$inject = ['UserRegistrationService'];
 function UserDetailsController(UserRegistrationService) {
    var $ctrl = this;

    $ctrl.userRegistration = UserRegistrationService.getLastUserRegistration();    
    if ($ctrl.userRegistration)
    {
      $ctrl.firstName = $ctrl.userRegistration.firstName;
      $ctrl.lastName = $ctrl.userRegistration.lastName;
      $ctrl.email = $ctrl.userRegistration.email;
      $ctrl.phone = $ctrl.userRegistration.phone;
      $ctrl.menuItem = $ctrl.userRegistration.menuItem;
    }    
};
})();
