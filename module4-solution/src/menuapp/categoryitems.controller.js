(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemsController', CategoryItemsController);


CategoryItemsController.$inject = ['items', 'categoryShortName'];
function CategoryItemsController(items, categoryShortName) {
  var categoryItems = this;
  categoryItems.items = items.data.menu_items;  
  categoryItems.categoryShortName = categoryShortName;
};

})();
