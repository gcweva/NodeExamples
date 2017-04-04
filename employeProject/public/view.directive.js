(function(){
'use strict';
var employ=angular.module("employee");

employ.directive('employeeDirective', ['employeeService',function(employeeService){
  return {
    restrict: 'AC',
    require: 'ngModel',
    priority:1000,
    link: function(scope, elem, attr, ngModelCtrl) {

        elem.on('blur', function (event) {
          console.log(event.target.value);

        var errorRegex=null;
         var errorMessage=null;
         var a= event.target.getAttribute('validation-name');
         console.log(employeeService);
         angular.forEach(employeeService.value.$$state.value.validation,function(k,v){
        if(k.validationName===a){
        errorRegex=new RegExp(k.validationRule);
        errorMessage=k.validationErrorMessage;
        }
    });

          if (!errorRegex.test(event.target.value)) {
          angular.element("#"+event.target.id).addClass("error");
          angular.element('#' + event.target.id).attr("data-original-title", "bad name" );

        }else {
            angular.element("#"+event.target.id).removeClass("error");
            angular.element('#' + event.target.id).attr("data-original-title", "" );
        }

        });
    }
  }
}]);
})();