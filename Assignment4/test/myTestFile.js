var request = require("request");
var assert = require("chai").assert;
var rp = require("request-promise");
var res = null;
var body = null;
var options = {
  uri: 'https://jsonplaceholder.typicode.com/users',
  resolveWithFullResponse: true
};

describe("Test Scenario", function () {
  before(function (done) {
    rp(options)
      .then(function (response) {
        res = response;
        done();
      });
  });

  it('Test1', function () {
    assert.equal(res.statusCode, 200);
    body = res.body;
  });

  it('Test2', function () {
    if (body == null) {
      throw (Error);
    }

    let requiredUsername = 'Samantha', requiredEmail = 'Nathan@yesenia.net';
    let obj = JSON.parse(body);

    Object.keys(obj).forEach(function (key) {
      if (obj[key]['username'] === requiredUsername) {
        assert.equal(requiredEmail, obj[key]["email"]);
      }
    });
  });
});

