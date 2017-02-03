angular.module('assessment').controller('mainCtrl', function($scope, mainService, $stateParams, $http){

  $scope.getProducts = function(){
    mainService.getProducts().then(function(response){
      $scope.products = response.data
    })
  }

  $scope.getProducts()

  $scope.getDetails = function(){

    return $http({
      url: 'http://practiceapi.devmounta.in/products/',
      method: "GET",
      params: {id: $stateParams.id}
  }).then(function(response){
      $scope.details = response.data
      console.log($stateParams)
      console.log($scope.details)
  })
  }

})
