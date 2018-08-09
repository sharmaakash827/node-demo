var request=require("request");
var assert= require("chai").assert;

describe("Test Scenario",function(){
	it("Test1",function(expectedStatusCode=200){
		request("https://jsonplaceholder.typicode.com/users ",function(error,response){
			assert.equal(expectedStatusCode,response.statusCode);
		});
	});

	it ("Test2", function(username='Samantha',email='Nathan@yesenia.net'){
		request("https://jsonplaceholder.typicode.com/users", function(error,response){
		var obj=JSON.parse(response.body);
		console.log(obj[0]["id"]);
		
		});

	});
});
	