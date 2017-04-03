(function(){
'use strict';
var employ=angular.module("employee");

employ.service('employeeService', ['$http',function($http){

   this.value = $http.get("../dataSource/validation.json").then(function(response) {
        //First function handles success
         return  response.data;
    }, function(response) {
        //Second function handles error
        return  "Something went wrong";
    });

// console.log(this.value);

}]);
})();