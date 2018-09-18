
exports.command = function(username, password) {
	this.perform(function (browser) {
		console.log(callback);
		browser
			.waitForElementVisible('#ecn_no', 5000)
			.setValue('#ecn_no', username)
		  .setValue('#password', password)
	    .click('input[type=submit]')
	    .waitForElementVisible('h3', 5000)
	    //.pause(5000)
	    .assert.containsText('h3', 'Home Page');
	});
	return this;
} 