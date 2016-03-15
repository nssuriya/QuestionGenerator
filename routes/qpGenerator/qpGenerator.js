
var express = require('express');
var router = express.Router();



router.get('/:urldata=?',function(req,res,next){
    var urldata = req.params.urldata;
    var params = urldata.split("_");
    console.log(urldata);
    var board = params[0];
    var std = params[1];
    var subject = params[2];
    var unit = params[3];

    var unitFileData = fs.readFileSync('../../database/json/'+board+'/'+std+'/'+subject+'/'+unit);
    res.json(unitFileData);
});
