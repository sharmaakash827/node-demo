
var request = require('request');
var my_function = function(url){
  return new Promise(function(resolve, reject){
    request(url, function(err, res, body){
      if (err){
        reject(err);
      } else {
          resolve(res);
        }   
    });     
        
  });
};

my_function('http://www.google.com').then(function(res){
  console.log(res.statusCode);
},function(err){
  console.log(err);
});