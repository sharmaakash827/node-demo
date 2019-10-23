module.exports = {
  'Download Report Test' : function (browser) {
   // console.log(browser);
    browser
      .url('http://203.110.85.168:8013')
     //.login('1000','dhanuka@123')
      .waitForElementVisible('#ecn_no', 5000)
      .setValue('#ecn_no', '1000')
      .setValue('#password', 'dhanuka@123')
      .click('input[type=submit]')
      .waitForElementVisible('h3', 5000)
      //.pause(5000)
      .assert.containsText('h3', 'Home')
      .useXpath()
      .click('//ul[@class="nav"]/li[5]/a')
      .click('//div[@id="page-wrapper"]//div[@class="col-md-6"][2]//a[13]')
      .useCss()
      .waitForElementVisible('button[type=submit]',5000)
      .setValue('input[name=StartDate]','2018-09-13')
      .setValue('input[name=EndDate]','2018-09-13')
      .useXpath()
      //.pause(2000)
      //.click('//div[@class="col-xs-12"]/button')
      //.waitForElementVisible('//li[@class="ui-autocomplete-list-item ui-corner-all"][1]/span',5000)
      //.click('//li[@class="ui-autocomplete-list-item ui-corner-all"][1]/span')
      .pause(2000)
      .useCss()
      .click('button[type=submit]')
      .pause(10000)
      .end();
  }

};

