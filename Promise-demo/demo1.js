
var request = require('request');
var my_function = function(url, name){
  return new Promise(function(resolve, reject){
    request(url, function(err, res, body){
     // console.log(res);
      if (err){
        console.log(`${name} : ${err}`);
        reject(err);
      } else {
        console.log(`${name} : ${res.statusCode}`)
        resolve(res);
      }
    });
  });
};


p1 = my_function('https://www.google.cool', 'Google');
p2 = my_function('https://www.yahoo.co.in', 'Yahoo');
p3 = my_function('https://www.tftus.com', 'TFT');

Promise.all([p1, p2, p3]).catch(function (err){});