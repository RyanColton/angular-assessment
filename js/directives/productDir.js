angular.module('assessment').directive('productDir', function(){
  return {
    restrict: 'E',
    templateUrl: './views/product-tmpl.html',
    scope: {
      products: '='
    }
  }
})
