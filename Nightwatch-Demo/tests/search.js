module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://www.google.co.in')
      .waitForElementVisible('.gsfi', 5000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[type=submit]', 1000)
      .click('input[type=submit]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .
      .end()
  }
};