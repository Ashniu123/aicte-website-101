//========================IMPORTS=======================================
var express = require('express');
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var fs = require('fs');
var url = 'mongodb://localhost:27017/Aicte101';

var search = express.Router();
search.use(bodyParser.json());
//====================================================================================
//===========================IMPLEMENTATION===========================================
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
search.route('/')
    .post(function(request,response,next){
        console.log(request.body);
        response.redirect('/');

    });
//====================================================================================
module.exports=search;
