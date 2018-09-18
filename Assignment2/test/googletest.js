var request = require("request");
var assert = require("chai").assert;

describe("Test Scenario 1", function() {
  it("Test1", function(expectedStatusCode = 500) {
    request("https://www.google.com", function(error, response) {
      assert(expectedStatusCode, response.statusCode);
    });
  });
});

