
(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // List of categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',    
    controller: "MainCategoriesController as mainCategories",
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/category-items/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/main-items.template.html',
    controller: "CategoryItemsController as categoryItems",
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {          
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }],
      // to display category short name in items view
      categoryShortName: ['$stateParams', function ($stateParams) {          
          return $stateParams.categoryShortName;
      }]
    }
  });

}

})();
