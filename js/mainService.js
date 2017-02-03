angular.module('assessment').service('mainService',function($http){
   this.getProducts = function(){
     return $http({
       url: ' https://practiceapi.devmounta.in/products',
       method: "GET"
     })
   }


 //   this.getDetails = function(){
 //     console.log(id)
 //     return $http({
 //       url: 'http://practiceapi.devmounta.in/products/',
 //       method: "GET",
 //       params: {
 //         id: $stateParams.id
 //       }
 //   })
 // }
})
