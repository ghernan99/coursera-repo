(function () {

angular.module('MenuApp')
.component('categories', {
    templateUrl: 'src/menuapp/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});


})();
