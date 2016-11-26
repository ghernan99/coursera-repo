(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.getMatchedMenuItems = function () {
    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);  
    ctrl.searchDone = true;
    promise.then(function (response)
    {
      ctrl.found = response;
      ctrl.searchResultsFound = ctrl.found != null && ctrl.found.length > 0;
    })    
  };

  ctrl.resultsFound = function () {
    return ctrl.searchResultsFound;
  }

  ctrl.remove = function (index){
    
    if (ctrl.found == null || ctrl.found.length == 0)
      return;
    
    if (index < 0 || ctrl.found.length < index + 1)
      throw new Error('Invalid element index to remove');

    ctrl.found.splice(index, 1);
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
                  method: "GET",
                  url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
              if (searchTerm == null || searchTerm == "")
                return [];

              // process result and only keep items that match the search term
              return result.data.menu_items.filter(function (value)
                                             {
                                                return searchTerm != null && 
                                                       value.description != null && 
                                                       value.description.indexOf(searchTerm) != -1; 
                                             });              
    })
  }  
}

function FoundItemsDirective() {
  return {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&',
      resultsFound: '&'
    }    
  };
}
})();
