

//Dependencies
var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');



//MongoDB connection
mongoose.connect('mongodb://localhost/operators');

//Express
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//port
app.set('port',(process.env.PORT||9999));

//Routes
app.use('/api',require('./routes/api'));

    //Index file
app.get('/',function(req,res){
    res.sendfile('index.html');
});

    //Bootstrap files
app.get('/node_modules/bootstrap/dist/css/bootstrap.min.css',function(req,res){
    res.sendfile('node_modules/bootstrap/dist/css/bootstrap.min.css');
});

app.get('/node_modules/bootstrap/dist/css/bootstrap-theme.min.css',function(req,res){
    res.sendfile('node_modules/bootstrap/dist/css/bootstrap-theme.min.css');
});

    //Angular file
app.get('/node_modules/angular/angular.js',function(req,res){
    res.sendfile('node_modules/angular/angular.js');
    }
);
    //Angular route file
app.get('/node_modules/angular-route/angular-route.js',function(req,res){
    res.sendfile('node_modules/angular-route/angular-route.js');
    }
);
    //Angular Script file
app.get('/angularScripts/script.js',function(req,res){
        res.sendfile('angularScripts/script.js');
    }
);
    //Controller file
app.get('/angularScripts/controllers.js',function(req,res){
        res.sendfile('angularScripts/controllers.js');
    }
);
    //Factory file
app.get('/angularScripts/factories.js',function(req,res){
        res.sendfile('angularScripts/factories.js');
    }
);
    //calculator page
app.get('/htmlPages/calculator.html',function(req,res){
    res.sendfile('htmlPages/calculator.html');
});
    //result page
app.get('/htmlPages/result.html',function(req,res){
    res.sendfile('htmlPages/result.html');
});

app.listen(app.get('port'),function(){
    console.log("server is running on port number", app.get('port'));
});
