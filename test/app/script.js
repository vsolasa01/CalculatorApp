/**
 * Created by VenkateshS on 7/18/2016.
 */

var app=angular.module('calApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'htmlPages/calculator.html',
        controller:'calController'
    }).when('/calculate',{
            resolve:{
                "check":function($rootScope,$location){
                            if(!$rootScope.someValue){
                                $location.path('/');
                            }
                }
            },
        templateUrl:'htmlPages/result.html',
        controller:'resultController'
    }).otherwise({
        redirectTo:'/'
    })
});
