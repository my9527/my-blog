/**
 * Created by my on 17/2/22.
 */

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('./home/home', {title: 'home', name:'yanglei'});
});
router.get('/test', function (req, res, next) {
    res.send('res is test')
});


module.exports = router;