(function () {
"use strict";

angular.module('common')
.service('UserRegistrationService', UserRegistrationService);


function UserRegistrationService() {
  var service = this;  
  var registrations = [];
  var lastUserRegistered = null;

  service.registerUser = function (firstName, lastName, email, phone, menuItem) {
    // Is the user already registered? - key is email address
    var userRegistration = registrations.filter(function (element) { return element.email == email});
    if (userRegistration.length == 0)
    {
      lastUserRegistered = {'firstName': firstName, 'lastName': lastName, 'email': email, 'phone': phone, 'menuItem': menuItem };
      registrations.push(lastUserRegistered);
    }    
    else
    {
      // Update details
      userRegistration[0].firstName = firstName;
      userRegistration[0].lastName = lastName;
      userRegistration[0].phone = phone;
      userRegistration[0].menuItem = menuItem;
      lastUserRegistered = userRegistration[0];
    }
  };

  service.getLastUserRegistration = function () {
    return lastUserRegistered;
  };

  service.isUserSignedUp = function () {
    return lastUserRegistered != null;
  };
}
})();
