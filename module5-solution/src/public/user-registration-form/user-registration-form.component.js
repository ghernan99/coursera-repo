(function () {
"use strict";

angular.module('public')
.component('userRegistrationForm', {
  templateUrl: 'src/public/user-registration-form/user-registration-form.html',
   bindings: {
     userRegistration: '<'
   },
  controller: UserRegistrationFormController
});

 UserRegistrationFormController.$inject = ['UserRegistrationService', 'MenuService'];
 function UserRegistrationFormController(UserRegistrationService, MenuService) {
    var $ctrl = this;

    $ctrl.menuItemValid = true;
    $ctrl.completed = false;

    $ctrl.userRegistration = UserRegistrationService.getLastUserRegistration();    
    if ($ctrl.userRegistration)
    {
      $ctrl.firstName = $ctrl.userRegistration.firstName;
      $ctrl.lastName = $ctrl.userRegistration.lastName;
      $ctrl.email = $ctrl.userRegistration.email;
      $ctrl.phone = $ctrl.userRegistration.phone;
      $ctrl.menuItemShortName = $ctrl.userRegistration.menuItem.short_name;
    }

    $ctrl.submit = function (){        
        MenuService.getMenuItem($ctrl.menuItemShortName).then(function (result){  
          $ctrl.menuItemValid = true;
          $ctrl.completed = true;               
          UserRegistrationService.registerUser($ctrl.firstName, $ctrl.lastName, $ctrl.email, $ctrl.phone, result);
        })
        .catch(
          function (reason)
          {
            $ctrl.menuItemValid = false;
          }
        );                        
    }    
};
})();
