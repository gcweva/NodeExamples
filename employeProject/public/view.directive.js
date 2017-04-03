(function(){
'use strict';
var employ=angular.module("employee");

employ.directive('employeeDirective', [function(){
  return {
    restrict: 'AC',
    require: 'ngModel',
    priority:1000,
    link: function(scope, elem, attr, ngModelCtrl) {

        elem.on('blur', function (event) {
          console.log(event.target.value);
          if (event.target.value==="null" ||event.target.value==="unk") {
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