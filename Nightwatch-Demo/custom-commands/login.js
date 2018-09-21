
exports.command = function (username, password) {
  return this.perform(function(browser, done) {
    browser
      .setValue('#ecn_no', username)
      .setValue('#password', password)
      .click('input[type=submit]')
      .waitForElementVisible('h3', 5000)
      done();
  })
  return this ;
}