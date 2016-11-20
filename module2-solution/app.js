(function () {
'use strict';

angular.module('toBuyApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getItemsToBuy();  

  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

  toBuy.areThereItemsToBuy = function()
  {
      return toBuy.items.length > 0;
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getItemsAlreadyBought(); 

  alreadyBought.areThereItemsAlreadyBought = function()
  {
      return alreadyBought.items.length > 0;
  }
}


function ShoppingListCheckOffService() {
  var service = this;
  
  var itemsToBuy = [ { name: "cookies", quantity: 10 }, 
                     { name: "sodas", quantity: 5 }, 
                     { name: "chewing gum packages", quantity: 3 },
                     { name: "tuna sandwiches", quantity: 4 },
                     { name: "turkey sandwiches", quantity: 6 }
                   ];
                   
  var itemsAlreadyBought = [];


  service.buyItem = function (itemIndex) {
    if (itemsToBuy.length == 0)
        // Nothing to buy
        return;

    if (itemIndex < 0 || itemsToBuy.length <= itemIndex)
        throw new Error("Invalid item to buy");

    itemsAlreadyBought.push(itemsToBuy[itemIndex]);    
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsAlreadyBought = function () {
    return itemsAlreadyBought;
  };
}

})();
