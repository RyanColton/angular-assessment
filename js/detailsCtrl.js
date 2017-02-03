angular.module('assessment').controller('detailsCtrl', function($scope, mainService, $stateParams, $http){

  $scope.getDetails = function(){

    return $http({
      url: 'http://practiceapi.devmounta.in/products/'+$stateParams.id,
      method: "GET",
      params: {id: $stateParams.id}
  }).then(function(response){
      $scope.details = response.data
      console.log($stateParams)
      console.log($scope.details)
  })
  }
  $scope.getDetails()

})
