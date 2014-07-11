'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MainCtrl', function($scope, DATA, ngTableParams) {
        $scope.name = "Yogesh Joshi";
        $scope.data = [];
        DATA.getData
        .success(function(data){
           $scope.data = data;
           // table pagination
           $scope.tableParams = new ngTableParams({
               page: 1, // show first page
               count: 5 // count per page
           },{
               total: $scope.data.length,
               getData: function($defer, params) {
                   $defer.resolve($scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
               }
           });
        })
        .error(function(err){
           alert(err);
        });
        // watch on countryName
        $scope.changeCountry = function(){
            if($scope.countryName == ""){
                $scope.countryName = {};
                $scope.sportsName = {};
            }
        }
    });
