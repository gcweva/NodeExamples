(function(){
'use strict';
var employ=angular.module("employee",[]);

employ.controller('employeeController',['$scope','$http','employeeService',function($scope,$http,employeeService){

console.log(employeeService.value);

$scope.addEmployee=function(employee){
console.log(employee);

}





}]);

})();