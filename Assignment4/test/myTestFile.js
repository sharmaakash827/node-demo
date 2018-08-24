var request = require("request");
var assert = require("chai").assert;
var rp = require("request-promise");
var res = null;
var body = null;
var options = {
	uri : 'https://jsonplaceholder.typicode.com/users',
	resolveWithFullResponse : true
};

describe("Test Scenario", function(){
	before(function(done){
		rp(options)
			.then(function(response){
					res = response ;
					//console.log(res);
					done();
			});
	});

	it('Test1', function(done){
		//console.log(res.statusCode);
		assert.equal(res.statusCode,200);
		body = res.body;
		done();
	});

	it('Test2', function(done){
		//console.log(res.body);
		if (body == null){
			throw(Error);
			done();
		}

		let requiredUsername = 'Samantha', requiredEmail = 'Nathan@yesenia.net';
		let obj = JSON.parse(body);
		//	console.log(response.body);
		
		Object.keys(obj).forEach(function(key) {
			if(obj[key]['username'] === requiredUsername){
				assert.equal(requiredEmail, obj[key]["email"]);
			}
		});
		done();
	});

		
});

