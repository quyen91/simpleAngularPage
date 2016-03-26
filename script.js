//create a module and name it quyenModule
var quyen = angular.module('quyenModule',[]);
quyenModule.controller('mainController', function($scope){
	$scope.message = "Every one can see it";
});