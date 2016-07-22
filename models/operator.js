

//Dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//Schema
var operatorSchema= new mongoose.Schema({
    
    operatorName:String,
    operatorValue:String
});

//Return model
module.exports=restful.model('Operators',operatorSchema);