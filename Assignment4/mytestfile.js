var request = require("request");
var assert = require("chai").assert;
var rp = require("request-promise");

describe("Test Scenario",function(){
	it("Test1",function(){
		rp('https://jsonplaceholder.typicode.com/users')
			.then(function(response){
				assert(response.statusCode,200);
			})
			.catch(function(err){
				console.log("Error:"+ err);
			});

		});

	it("Test 2", function(){
		rp('https://jsonplaceholder.typicode.com/users')
			.then(function(response){
				return response
			})
			.then(function(response,done){
				if(assert(response.statusCode,200)
				{
					let Requiredusername='Samantha',Requiredemail='Nathan@yesenia.net'
					
					let obj=JSON.parse(response.body);

					Object.keys(obj).forEach(function(key) {
						if(obj[key]['username'] === Requiredusername){
							assert.equal(Requiredemail, obj[key]["email"]);
						}
					});
					done()	
				}
				
			});


	});
});
