var request = require("request");
var rp = require("request-promise");
var fs = require("fs");
var assert = require("chai").assert;

var myRequestFunc =  async function(url1, url2, cb) {
  request(url1, function(err, res1) {
    resCode1 = res1.statusCode;

    request(url2, function(err, res2) {
      resCode2 = res2.statusCode;

      cb(resCode1,resCode2);

    });
  });
/*-----Using request-promise module---------

    let option1 = {
      uri : url1,
      resolveWithFullResponse : true
    }
    
    let option2 = {
      uri : url2,
      resolveWithFullResponse : true
    }
    
    let p1 = rp(option1).catch(function(err) {
      return err;
    });
    
    let p2 = rp(option2).catch(function(err) {
      return err;
    });
    
    let result = await Promise.all([p1,p2])
    resCode1 = result[0].statusCode;
    resCode2 = result[1].statusCode;
    cb(resCode1,resCode2);
}
*/
var cb = function(res1, res2) {
  try{
    if (assert.equal(res1, res2) == undefined) {
      fs.writeFile("result.txt", "True", function(err) {
        if(err){
          throw err;
        }
      });
    }
  }
  catch(Error){
    fs.writeFile("result.txt", "False", function(err){});
  }
}

myRequestFunc('https://www.google.com','http://www.google.com', cb);