var file = require("fs");
var request = require("request");
var rp = require("request-promise");

var myRequestFunc = function(url){
  return new Promise(function(resolve, reject){
    request(url, function(err, res, body){
      if(err){
        reject(err);
      }
      else{
        resolve(res);
      }
    });
  });
}

myRequestFunc('http://www.google.com').then(function(res){
  file.writeFile('result.txt', res.statusCode);
}, function(err){
  console.log(err);
});