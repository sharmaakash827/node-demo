const request = require("request");
const assert = require("chai").assert;

var checkStatus = function (url, expectedStatusCode) {
  request(url, function (error, response, body) {
    console.log(expectedStatusCode);
    assert.equal(expectedStatusCode, response.statusCode, "expected Status Code does not match with response");
  });
}

module.exports.checkStatus = checkStatus;