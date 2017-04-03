(function(){
'use strict';
var employ=angular.module("employee");

employ.service('employeeService', ['$http',function($http){

    $http.get("../dataSource/validation.js") .then(function(response) {
        //First function handles success
         this.value=  response.data.validation;
    }, function(response) {
        //Second function handles error
        this.value=  "Something went wrong";
    });

// console.log(this.value);

}]);
})();