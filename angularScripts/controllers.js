

angular.module('calApp')
        // controller for calculator page
        .controller('calController',function($scope,$http,$location,$rootScope,restApi,transferData){

            $rootScope.someValue=false;
            
            restApi.task().then(function success(res){
                $scope.operators=res;
                console.log($scope.operators);
            });


                $scope.calculate=function () {
                    $rootScope.someValue=true;
                    var result={
                        "operator":$scope.selectedOperation.operatorValue,
                        "number1":$scope.number1,
                        "number2":$scope.number2
                    };
                    transferData.set(result);
                    $location.path('/calculate');
                };

        })

        //result page controller
        .controller('resultController',function($scope,transferData,calculation){
                var x=transferData.get();
                $scope.finalResult=calculation.calculate(x.operator,x.number1,x.number2);



        });