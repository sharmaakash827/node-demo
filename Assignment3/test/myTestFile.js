var request = require("request");
var assert = require("chai").assert;
var res = null;

describe("Test Scenario", function () {

  before(function (done) {
    request("https://jsonplaceholder.typicode.com/users", function (error, response) {
      if (response) {
        res = response;
      }
      done();
    });
  });

  it("Test1", function (expectedStatusCode = 200) {
    assert.equal(expectedStatusCode, res.statusCode);
  });

  it("Test2", function (done) {
    let requiredUsername = 'Samantha', requiredEmail = 'Nathan@yesenia.net';
    let obj = JSON.parse(res.body);

    Object.keys(obj).forEach(function (key) {
      if (obj[key]['username'] === requiredUsername) {
        assert.equal(requiredEmail, obj[key]["email"]);
      }
    });
    done();
  });
});