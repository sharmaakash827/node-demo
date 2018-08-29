var request = require("request");
var fs = require("fs");
var assert = require("chai").assert;
var res,res1,res2 = null;
var myRequestFunc = function(url1, url2, cb){

	request(url1, function(err, res){
		console.log(res.statusCode);
		res1 = res.statusCode
	});

	request(url2, function(err, res){
		console.log(res.statusCode);
		res2 = res.statusCode
	});
	cb();
}

var cb = function(res1, res2){
	if (assert.equal(res1, res2)){
		res = "True";
	}
	else{
		res = "False";
	}
	console.log(res);
	fs.writeFile("result.txt", res)
}

myRequestFunc('https://www.google.com','http://www.google.com', cb);