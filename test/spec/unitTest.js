describe(" In calApp", function() {

    var transferData,calculation,restApi,$httpBackend;

    var operations=[{"_id":"5791e6b7dfde38f1d195c303","operatorName":"Add","operatorValue":"+"},{"_id":"5791e98f919c8ce83b3b23b4","operatorName":"Sub","operatorValue":"-","__v":0},{"_id":"5791e9b8919c8ce83b3b23b5","operatorName":"Mul","operatorValue":"*","__v":0},{"_id":"5791e9c0919c8ce83b3b23b6","operatorName":"Div","operatorValue":"/","__v":0}];


    beforeEach(function () {
        angular.mock.module('calApp');

        inject(function($injector){
            transferData=$injector.get('transferData');
            calculation=$injector.get('calculation');
            restApi=$injector.get('restApi');
            $httpBackend=$injector.get('$httpBackend');
            $httpBackend.when('GET','https://calculator-1.herokuapp.com/api/operators')
                .respond(200,operations);

        });

    });

    describe('transferData ',function(){
        it('will return the data that you send',function(){

            transferData.set({'data':1});
            expect(transferData.get()).toEqual({'data':1});

        });
    });

    describe('calculation',function(){
        it("will add two numbers",function(){

            var value=calculation.calculate("+",1,2);
            expect(value).toEqual(3);

        });

        it("will subtract two numbers",function(){

            var value=calculation.calculate("-",5,-1);
            expect(value).toEqual(6);

        });

        it("will multiply two numbers",function(){

            var value=calculation.calculate("*",4,6);
            expect(value).toEqual(24);

        });

        it("will divide two numbers",function(){

            var value=calculation.calculate("/",10,5);
            expect(value).toEqual(2);

        });
    });

    describe('restApi',function(){
        var response;



        restApi.task.then(function(data){
            response=data;
        });
        $httpBackend.flush();
        expect(response).toEqual(operations);
    });






});