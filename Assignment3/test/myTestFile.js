var request=require("request");
var assert= require("chai").assert;

describe("Test Scenario",function(){
	it("Test1",function(expectedStatusCode=200){
		request("https://jsonplaceholder.typicode.com/users ",function(error,response){
			assert.equal(expectedStatusCode,response.statusCode);
		});
	});

	it ("Test2", function(done){
		let Requiredusername='Samantha',Requiredemail='Nathan@yesenia.net'
		request("https://jsonplaceholder.typicode.com/users", function(error,response){
			let obj=JSON.parse(response.body);

			Object.keys(obj).forEach(function(key) {
				if(obj[key]['username'] === Requiredusername){
					assert.equal(Requiredemail, obj[key]["email"]);
				}
			});
			done()
		});

	});

});
