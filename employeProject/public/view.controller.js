(function(){
'use strict';
var employ=angular.module("employee",[]);

employ.controller('employeeController',['$scope','$http','employeeService',function($scope,$http,employeeService){

console.log(employeeService);


}]);

})();