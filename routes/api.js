/**
 * Created by VenkateshS on 7/19/2016.
 */

//Dependencies

var express=require('express');
var router=express.Router();

//Models

var Operator=require('../models/operator');



//Routes
    //operators
Operator.methods(['get']);
Operator.register(router,'/operators');



//Return router
module.exports=router;