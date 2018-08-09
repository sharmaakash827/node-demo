var request=require("request");
//const expect=require("chai").expect;
const assert= require("chai").assert;

var checkStatus = function(url,expectedStatusCode){

request(url,function(error,response, body){
	console.log(expectedStatusCode)
//	expect(response.statusCode).to.equal(expectedStatusCode);
assert.equal(expectedStatusCode,response.statusCode,"expected Status Code does not match with response");
});
}

module.exports.checkStatus=checkStatus;