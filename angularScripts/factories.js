/**
 * Created by VenkateshS on 7/19/2016.
 */
angular.module('calApp')
    // Factory for calculating 
    .factory('calculation',function(){
            function calculate(operand,number1,number2) {
                var result;
                switch(operand){
                    case "+":
                        result=number1+number2;
                        break;
                    case "-":
                        result=number1-number2;
                        break;
                    case "*":
                        result=number1*number2;
                        break;
                    case "/":
                        result=number1/number2;
                        break;
                }
                return result;
            }
            return {
                calculate:calculate
            }
    })
    // Factory for transfering data between routes
    .factory('transferData',function(){
            var savedData = {};
            function set(data) {
                savedData = data;
            }
            function get() {
                return savedData;
            }
        
            return {
                set: set,
                get: get
            }
    })
    // Factory for restful api
    .factory('restApi',function($http,$q){
        var task=function(){
            var defer=$q.defer();
            $http.get('http://localhost:9999/api/operators')
                .success(function(res){
                    
                    defer.resolve(res);
                })
                .error(function(err){
                    defer.reject(err);
                });
            return defer.promise;
        };

        return {
            task:task
        }
    })
;