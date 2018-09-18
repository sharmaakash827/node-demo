module.exports = {
  'Download Report Test' : function (browser) {
   // console.log(browser);
    browser
      .url('http://203.110.85.168:8013')
     // .login('1000','dhanuka@123')
      .waitForElementVisible('#ecn_no', 5000)
      .setValue('#ecn_no', '1000')
      .setValue('#password', 'dhanuka@123')
      .click('input[type=submit]')
      .waitForElementVisible('h3', 5000)
      //.pause(5000)
      .assert.containsText('h3', 'Home Page')
      .useXpath()
      .click('//ul[@class="nav"]/li[5]/a')
      .click('//ul[@class="nav"]/li[5]/ul/li[1]/a')
      .useCss()
      .waitForElementVisible('button[type=submit]',5000)
      .setValue('input[name=StartDate]','2018-09-13')
      .setValue('input[name=EndDate]','2018-09-13')
      .useXpath()
      .click('//span[@class="ui-button-text ui-clickable"]')
      .waitForElementVisible('//li[@class="ui-autocomplete-list-item ui-corner-all"][1]/span',5000)
      .click('//li[@class="ui-autocomplete-list-item ui-corner-all"][1]/span')
      .pause(2000)
      .useCss()
      .click('button[type=submit]')
      .pause(10000)
      .end()
      ;
  }
};

