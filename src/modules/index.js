/**
 * Created by my on 17/2/23.
 */

var express = require('express');
var router = express.Router();

var home = require('./home/route');


module.exports = function (app) {
    app.use('/', function (req, res, next) {
        if(req.path.match(/[^/]+/g)){
            next()
        }else{
            // res.send('respond with a resource index');
            res.render('./common/index.html', {title: 'My blog'});
        }
    });
    app.use('/home', home);


};