var request = require("request");

var my_function = function(url, cb){
request(url,function(err, res, body){
cb(err,res,body);
});
}

my_function('http://www.google.com', function(err,res,body){
console.log(res.statusCode);
});