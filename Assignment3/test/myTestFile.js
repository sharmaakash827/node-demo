var request=require("request");
var assert= require("chai").assert;
var Response=null;

describe("Test Scenario",function(){

	before( function(done){
		request("https://jsonplaceholder.typicode.com/users",function(error,response){
			if (response){ Response=response }
			done();
			});
		
		});

	it("Test1",function(expectedStatusCode=200){
		assert.equal(expectedStatusCode,Response.statusCode);	
		});
			

	it ("Test2", function(done){
		let Requiredusername='Samantha',Requiredemail='Nathan@yesenia.net'
			let obj=JSON.parse(Response.body);

			Object.keys(obj).forEach(function(key) {
				if(obj[key]['username'] === Requiredusername){
					assert.equal(Requiredemail, obj[key]["email"]);
				}
			});
			done()
		});
});